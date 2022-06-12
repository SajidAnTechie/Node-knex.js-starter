import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for DataBase Error.
 */
class DataBaseError extends BaseError {
  /**
   * Constructor for DataBaseError.
   *
   * @param {String} message
   * @param {String} details
   */
  constructor(message, details = '') {
    super(message);
    this.details = details;
    this.code = HttpStatus.BAD_GATEWAY;
  }
}

export default DataBaseError;
