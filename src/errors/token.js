import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for Token Error.
 */
class TokenError extends BaseError {
  /**
   * Constructor for TokenError.
   *
   * @param {String} message
   * @param {String} details
   */
  constructor(message, details = '') {
    super(message);
    this.details = details;
    this.code = HttpStatus.UNAUTHORIZED;
  }
}

export default TokenError;
