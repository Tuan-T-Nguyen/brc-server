import Author from '../models/author.model';

/**
 * Get list authors has paging
 * @public
 */
exports.listPaging = (req, res, next) => {
  const authors = Author.listPaging(req.query).then((data) => data.map((author) => author.transform()),);
  const total = Author.total().then((count) => count);
  Promise.all([authors, total])
    .then((values) => res.json({ data: values[0], total: values[1] }))
    .catch((e) => next(e));
};

/**
 * Get list authors has not paging
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const authors = await Author.list(req.query);
    const transformedAuthors = authors.map((author) => author.transform());
    return res.json(transformedAuthors);
  } catch (error) {
    return next(error);
  }
};
