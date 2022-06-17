import * as util from '../utils/validate';

/**
 * Middleware to validate a schema against request body.
 *
 * @param {Object} schema
 * @returns {Promise}
 */
export const validateBodySchema = (schema) => (req, res, next) => {
  return util
    .validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
};

/**
 * Middleware to validate a schema against request query.
 *
 * @param {Object} schema
 * @returns {Promise}
 */
export const validateQuerySchema = (schema) => (req, res, next) => {
  return util
    .validate(req.query, schema)
    .then(() => next())
    .catch((err) => next(err));
};
