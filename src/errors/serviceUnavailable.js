import BaseError from './error';
import HttpStatus from 'http-status-codes';

/**
 * Error class for ServiceNotAvailable Error.
 */
class ServiceNotAvailableError extends BaseError {
  /**
   * Constructor for ServiceNotAvailableError.
   *
   * @param {String} message
   * @param {String} details
   */
  constructor(message, details = '') {
    super(message);
    this.details = details;
    this.code = HttpStatus.SERVICE_UNAVAILABLE;
  }
}

export default ServiceNotAvailableError;
