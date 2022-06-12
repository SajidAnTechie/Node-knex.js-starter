import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for RowNotFound Error.
 */
class RowNotFoundError extends BaseError {
  /**
   * Constructor for RowNotFoundError.
   *
   * @param {String} message
   * @param {String} details
   */
  constructor(message, details = '') {
    super(message);
    this.details = details;
    this.code = HttpStatus.NOT_FOUND;
  }
}

export default RowNotFoundError;
