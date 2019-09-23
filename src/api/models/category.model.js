import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../utils/APIError';

/**
 * Category Schema
 * @private
 */
const categorySchema = new mongoose.Schema({
  englishName: {
    type: String,
    required: true,
    unique: true,
    maxlength: 128,
    trim: true,
  },
  vietnamName: {
    type: String,
    maxlength: 128,
    trim: true,
  },
  type: {
    type: Int8Array,
  },
});
