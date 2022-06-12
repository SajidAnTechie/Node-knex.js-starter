import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for Authentication Error.
 */
class AuthenticationError extends BaseError {
  /**
   * Constructor for AuthenticationError.
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

export default AuthenticationError;
