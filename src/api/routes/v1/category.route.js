import express from 'express';
import validate from 'express-validation';
import controller from '../../controllers/category.controller';

const {
  createCategory,
  updateCategory
} = require('../../validations/category.validation');
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
   * @apiSuccess {String}  id         Category's id
   * @apiSuccess {String}  englishName       Category's english name
   * @apiSuccess {String}  vietnamName      Category's vietnam name
   * @apiSuccess {String}  type       Category's type
   * @apiSuccess {Date}    createdAt  Timestamp
   * @apiSuccess {Date}    updatedAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(ADMIN), validate(createCategory), controller.create);

router
  .route('/:categoryId')
  /**
   * @api {patch} v1/categories/:id Update Category
   * @apiDescription Update some fields of a category document
   * @apiVersion 1.0.0
   * @apiName UpdateCategory
   * @apiGroup Category
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {String}             englishName     Category's english name
   * @apiParam  {String}     vietnamName  Category's vietnam name
   * @apiParam  {String=fition,non-fiction}  [type]    Category's type
   *
   * @apiSuccess {String}  id         Category's id
   * @apiSuccess {String}  englishName       Category's english name
   * @apiSuccess {String}  vietnamName      Category's vietnam name
   * @apiSuccess {String}  type       Category's type
   * @apiSuccess {Date}    createdAt  Timestamp
   * @apiSuccess {Date}    updatedAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only admins can update the data
   * @apiError (Not Found 404)    NotFound     Category does not exist
   */
  .patch(authorize(ADMIN), validate(updateCategory), controller.update);

module.exports = router;
