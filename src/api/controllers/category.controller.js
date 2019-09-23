import Category from '../models/category.model';

/**
 * Get category list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const categories = await Category.list(req.query);
    const transformedCategories = categories.map((category) => category.transform(),);
    return res.json(transformedCategories);
  } catch (error) {
    return next(error);
  }
};
