import basicAuth from 'express-basic-auth';
const httpStatus = require('http-status');
const passport = require('passport');
const User = require('../models/user.model');
const APIError = require('../utils/APIError');
const { basicAuthName, basicAuthPass } = require('../../config/vars');

const ADMIN = 'admin';
const LOGGED_USER = '_loggedUser';

const handleJWT = (req, res, next, roles) => async (err, user, info) => {
  const error = err || info;
  const logIn = Promise.promisify(req.logIn);
  const apiError = new APIError({
    message: error ? error.message : 'Unauthorized',
    status: httpStatus.UNAUTHORIZED,
    stack: error ? error.stack : undefined
  });

  try {
    if (error || !user) throw error;
    await logIn(user, { session: false });
  } catch (e) {
    return next(apiError);
  }

  if (roles === LOGGED_USER) {
    if (user.role !== 'admin' && req.params.userId !== user._id.toString()) {
      apiError.status = httpStatus.FORBIDDEN;
      apiError.message = 'Forbidden';
      return next(apiError);
    }
  } else if (!roles.includes(user.role)) {
    apiError.status = httpStatus.FORBIDDEN;
    apiError.message = 'Forbidden';
    return next(apiError);
  } else if (err || !user) {
    return next(apiError);
  }

  req.user = user;

  return next();
};

exports.ADMIN = ADMIN;
exports.LOGGED_USER = LOGGED_USER;

exports.authorize = (roles = User.roles) => (req, res, next) =>
  passport.authenticate(
    'jwt',
    { session: false },
    handleJWT(req, res, next, roles)
  )(req, res, next);

exports.oAuth = service => passport.authenticate(service, { session: false });

exports.basicAuth = () => {
  return basicAuth({
    authorizer: basicAuthorizer,
    unauthorizedResponse: getUnauthorizedBasicResponse
  });
};

const basicAuthorizer = (username, password) => {
  const userMathches = basicAuth.safeCompare(username, basicAuthName);
  const passwordMatches = basicAuth.safeCompare(password, basicAuthPass);
  return userMathches && passwordMatches;
};

const getUnauthorizedBasicResponse = req => {
  return req.auth
    ? 'Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected'
    : 'No credentials provided';
};
