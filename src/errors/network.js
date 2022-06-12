import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for NewtWork Error.
 */
class NetWorkError extends BaseError {
  /**
   * Constructor for NetWorkError.
   *
   * @param {String} message
   * @param {String} details
   */
  constructor(message, details = '') {
    super(message);
    this.details = details;
    this.code = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

export default NetWorkError;
