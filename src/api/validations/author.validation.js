import Joi from 'joi';

module.exports = {
  // GET /v1/authors
  listAuthors: {
    query: {
      name: Joi.string(),
    },
  },

  // GET /v1/authors/list-paging
  listPagingAuthors: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number()
        .min(1)
        .max(100),
      name: Joi.string(),
    },
  },

  // POST /v1/authors
  createAuthor: {
    body: {
      name: Joi.string().required(),
      description: Joi.string(),
      avatarUrls: Joi.array().items(Joi.string().uri()),
      bornDate: Joi.date(),
      dieDate: Joi.date(),
    },
  },
};
