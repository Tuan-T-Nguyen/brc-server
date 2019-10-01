import express from 'express';
import validate from 'express-validation';
import controller from '../../controllers/author.controller';

const {
  listAuthors,
  listPagingAuthors,
  createAuthor,
} = require('../../validations/author.validation');
const { authorize, ADMIN } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/authors List authors without paging
   * @apiDescription Get a list of authors without paging
   * @apiVersion 1.0.0
   * @apiname ListAuthors
   * @apiGroup Author
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} categories List all of authors.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   *
   */
  .get(authorize(ADMIN), validate(listAuthors), controller.list)
  /**
   * @api {post} v1/authors Create Author
   * @apiDescription Create a new author
   * @apiVersion 1.0.0
   * @apiName CreateAuthor
   * @apiGroup Author
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}             name     Author's name
   * @apiParam  {String}     description  Author's description
   * @apiParam  {Array} avatarUrls Author's avatars
   * @apiParam  {Date}    bornDate Author's born date formated YYYY-dd-mm
   * @apiParam  {Date}    dieDate Author's die date formated YYYY-dd-mm
   *
   * @apiSuccess {String}  id         Author's id
   * @apiSuccess {String}  name         Author's name
   * @apiSuccess {String}  description       Author's description
   * @apiSuccess {Array} avatarUrls Author's avatars
   * @apiSuccess {Date}  bornDate      Author's born date
   * @apiSuccess {Date}  dieDate       Author's die date
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(ADMIN), validate(createAuthor), controller.create);

router
  .route('/list-paging')
  /**
   * @api {get} v1/authors List authors with paging
   * @apiDescription Get a list of authors with paging
   * @apiVersion 1.0.0
   * @apiname ListPagingAuthors
   * @apiGroup Author
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} categories List of authors with paging.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   *
   */
  .get(authorize(ADMIN), validate(listPagingAuthors), controller.listPaging);

module.exports = router;
