import express from 'express';
import validate from 'express-validation';
import controller from '../../controllers/author.controller';

const {
  listAuthors,
  listPagingAuthors,
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
  .get(authorize(ADMIN), validate(listAuthors), controller.list);

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
