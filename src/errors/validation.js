import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for Validation Error.
 */
class ValidationError extends BaseError {
  /**
   * Constructor for ValidationError.
   *
   * @param {String} message
   * @param {String} details
   */
  constructor(message, details = '') {
    super(message);
    this.details = details;
    this.code = HttpStatus.BAD_REQUEST;
  }
}

export default ValidationError;
