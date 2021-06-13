import HttpStatus from 'http-status-codes';
import buildError from '../utils/buildError';

/**
 *  Error responce middleware for 404 not found
 * @param {Object} req
 * @param {Object} res
 */
export function notFound(req, res) {
  res.status(HttpStatus.NOT_FOUND).send({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    },
  });
}

/**
 * Method not allowed middleware.
 * @param {Object} req
 * @param {Object} res
 */

export function methodNotAllowed(req, res) {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).send({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED),
    },
  });
}

export function genericErrorHandler(err, req, res, next) {
  const error = buildError(err);
  res.status(error.code).send({ ...error });
}
