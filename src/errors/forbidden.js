import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for Forbidden Error.
 */
class ForbiddenError extends BaseError {
  /**
   * Constructor for ForbiddenError.
   *
   * @param {String} message
   * @param {String} details
   */
  constructor(message, details = '') {
    super(message);
    this.details = details;
    this.code = HttpStatus.FORBIDDEN;
  }
}

export default ForbiddenError;
