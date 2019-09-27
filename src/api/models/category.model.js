import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../utils/APIError';

/**
 * Types of categories
 */
const types = ['fiction', 'non-fiction'];
/**
 * Category Schema
 * @private
 */
const categorySchema = new mongoose.Schema(
  {
    englishName: {
      type: String,
      required: true,
      maxlength: 128,
      trim: true,
    },
    vietnamName: {
      type: String,
      maxlength: 128,
      trim: true,
    },
    type: {
      type: String,
      enum: types,
      default: 'fiction',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
/**
 * Methods
 */
categorySchema.method({
  transform() {
    const transformed = {};
    const fields = [
      'id',
      'englishName',
      'vietnamName',
      'type',
      'createdAt',
      'updatedAt',
    ];
    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },
});
/**
 *
 */
categorySchema.statics = {
  types,
  async get(id) {
    let category;
    if (mongoose.Types.ObjectId.isValid(id)) {
      category = await this.findById(id).exec();
    }
    if (category) {
      return category;
    }
    throw new APIError({
      message: 'Category does not exist',
      status: httpStatus.NOT_FOUND,
    });
  },
  /**
   * List all categories in descending order of 'englishName'
   */
  list() {
    return this.find()
      .sort({ type: 1, englishName: 1 })
      .exec();
  },
  transform() {
    const transformed = {};
    const fields = [
      'id',
      'englishName',
      'vietnamName',
      'type',
      'createdAt',
      'updatedAt',
    ];
    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },
};
/**
 * @typedef Category
 */
module.exports = mongoose.model('Category', categorySchema);
