import HttpStatus from 'http-status-codes';

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
