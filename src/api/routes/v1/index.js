import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import seedRoutes from './seed.route';
import categoryRoutes from './category.route';

const router = express.Router();

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
if (isDev || isTest) {
  router.use('/seeds', seedRoutes);
}

module.exports = router;
