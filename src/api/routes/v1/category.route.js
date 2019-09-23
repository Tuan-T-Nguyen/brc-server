import express from 'express';
import controller from '../../controllers/category.controller';

const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/categories List Categories
   * @apiDescription Get a list of categories
   * @apiVersion 1.0.0
   * @apiname ListCategory
   * @apiGroup Category
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} categories List of categories.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   *
   */
  .get(authorize(ADMIN), controller.list);

module.exports = router;
