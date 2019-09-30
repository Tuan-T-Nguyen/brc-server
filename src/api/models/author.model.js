const mongoose = require('mongoose');
const { omitBy, isNil } = require('lodash');

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    avatarUrls: {
      type: Array,
    },
    bornDate: {
      type: Date,
    },
    dieDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

authorSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      'id',
      'name',
      'description',
      'avatarUrls',
      'bornDate',
      'dieDate',
      'createdAt',
    ];
    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },
});

authorSchema.statics = {
  /*
   * Count all document of Authors
   */
  total() {
    return this.estimatedDocumentCount();
  },
  /**
   * List authors has paging in descending order of 'createdAt' timestamp
   */
  listPaging({ page = 1, perPage = 30, name }) {
    const options = omitBy({ name }, isNil);
    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },
  /**
   * List authors not paging in descending order of 'createdAt' timestamp
   */
  list() {
    return this.find()
      .sort({ createdAt: -1 })
      .exec();
  },
};
/**
 * @typedef Author
 */
module.exports = mongoose.model('Author', authorSchema);
