import mongoose from 'mongoose';

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
  /**
   * List all categories in descending order of 'englishName'
   */
  list() {
    return this.find()
      .sort({ englishName: 1 })
      .exec();
  },
};
/**
 * @typedef Category
 */
module.exports = mongoose.model('Category', categorySchema);
