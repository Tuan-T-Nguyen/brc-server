import Joi from 'joi';
import Category from '../models/category.model';

module.exports = {
  // POST /v1/categories
  createCategory: {
    body: {
      englishName: Joi.string()
        .max(128)
        .required(),
      vietnamName: Joi.string()
        .max(128)
        .required(),
      type: Joi.string().valid(Category.types),
    },
  },

  // PATCH /v1/categories/:categoryId
};
