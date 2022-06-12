import TokenError from '../errors/token';
import HttpStatus from 'http-status-codes';
import ValidationError from '../errors/validation';
import RowNotFoundError from '../errors/rowNotFound';
import AuthenticationError from '../errors/authentication';

/**
 * Build error response for validation errors.
 *
 * @param   {Error} err
 * @returns {Object}
 */
function buildError(err) {
  //Validation Error
  if (err.isJoi) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: err.message || HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
      details:
        err.details &&
        err.details.map((err) => {
          return {
            message: err.message,
            param: err.path.join('.'),
          };
        }),
    };
  }

  //HTTP errors
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error,
    };
  }

  if (err instanceof TokenError || err instanceof AuthenticationError) {
    return {
      code: err.code || HttpStatus.UNAUTHORIZED,
      message: err.message || HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
    };
  }

  if (err instanceof RowNotFoundError) {
    return {
      code: HttpStatus.NOT_FOUND,
      message: err.message || HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    };
  }

  if (err instanceof ValidationError) {
    return {
      id: requestID,
      code: err.code || HttpStatus.BAD_REQUEST,
      message: err.message || HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    };
  }

  if (err instanceof ForbiddenError) {
    return {
      id: requestID,
      code: err.code || HttpStatus.FORBIDDEN,
      message: err.message || HttpStatus.getStatusText(HttpStatus.FORBIDDEN),
    };
  }

  if (err instanceof ServiceUnavailableError) {
    return {
      id: requestID,
      code: err.code || HttpStatus.SERVICE_UNAVAILABLE,
      message: err.message || HttpStatus.getStatusText(HttpStatus.SERVICE_UNAVAILABLE),
    };
  }

  //Postgres Integrity Constraint Violation
  if (err.name && err.name === 'error' && err.code && err.code >= 23000 && err.code <= 23505) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    };
  }

  //Custom error
  if (err.statusCode) {
    return {
      code: err.statusCode,
      message: err.message,
    };
  }

  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
  };
}

export default buildError;
