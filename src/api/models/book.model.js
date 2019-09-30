import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  featureImage: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Authors' }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }],
});

module.exports = mongoose.model('Book', bookSchema);
