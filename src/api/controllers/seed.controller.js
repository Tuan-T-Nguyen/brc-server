import httpStatus from 'http-status';
import User from '../models/user.model';
import { userSeed } from '../seeds/user.seed';

/**
 * Seed users
 * @public
 */
exports.seedUsers = async (req, res, next) => {
  try {
    await userSeed(req.params.count);
    return res
      .status(httpStatus.OK)
      .send(`User seed success! Created ${req.params.count || 10} users!`);
  } catch (e) {
    return next(e);
  }
};

/**
 * Clear all collections
 * @public
 */
exports.clear = async (req, res, next) => {
  try {
    await User.remove();
    return res.status(httpStatus.OK).send('All collections clear');
  } catch (e) {
    return next(e);
  }
};
