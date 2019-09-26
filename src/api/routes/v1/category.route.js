import express from 'express';
import validate from 'express-validation';
import controller from '../../controllers/category.controller';

const { createCategory } = require('../../validations/category.validation');
const { authorize, ADMIN } = require('../../middlewares/auth');

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
  .get(authorize(ADMIN), controller.list)
  /**
   * @api {post} v1/categories Create Category
   * @apiDescription Create a new category
   * @apiVersion 1.0.0
   * @apiName CreateCategory
   * @apiGroup Category
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}             englishName     Category's english name
   * @apiParam  {String}     vietnamName  Category's vietnam name
   * @apiParam  {String=fition,non-fiction}  [type]    Category's type
   *
   * @apiSuccess (Created 201) {String}  id         Category's id
   * @apiSuccess (Created 201) {String}  englishName       Category's english name
   * @apiSuccess (Created 201) {String}  vietnamName      Category's vietnam name
   * @apiSuccess (Created 201) {String}  type       Category's type
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   * @apiSuccess (Created 201) {Date}    updatedAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(ADMIN), validate(createCategory), controller.create);

module.exports = router;
