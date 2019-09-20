import express from 'express';
import SeedController from '../../controllers/seed.controller';

const router = express.Router();

router
  .route('/users/:count?')
  /**
   * @api {get} v1/seeds/users/:count? Generator users by count
   * @apiDescription Generator users by count
   * @apiVersion 1.0.0
   * @apiName SeedUsers
   * @apiGroup Seed
   * @apiPermission test or development
   *
   * @apiSuccess {String}  id         User's id
   * @apiSuccess {String}  name       User's name
   * @apiSuccess {String}  email      User's email
   * @apiSuccess {String}  role       User's role
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Not Found 404)    NotFound     api not found
   */
  .get(SeedController.seedUsers);

router.route('/clear').get(SeedController.clear);

module.exports = router;
