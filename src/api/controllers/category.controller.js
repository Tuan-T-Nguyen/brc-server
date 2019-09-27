import httpStatus from 'http-status';
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
/**
 * Create new category
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const category = new Category(req.body);

    const savedCategory = await category.save();
    res.status(httpStatus.OK);
    return res.json(savedCategory.transform());
  } catch (error) {
    return next(error);
  }
};
/**
 * Update existing category
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const existCategory = await Category.get(categoryId);
    const category = Object.assign(existCategory, req.body);
    const savedCategory = await category.save();
    res.status(httpStatus.OK);
    return res.json(savedCategory.transform());
  } catch (error) {
    return next(error);
  }
};
