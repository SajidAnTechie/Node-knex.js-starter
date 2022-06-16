import BaseError from './error';

/**
 * Custom error generator.
 *
 * @param {String} message
 * @param {Integer} code
 * @returns
 */
class CustomError extends BaseError {
  constructor(message, code) {
    super(message);
    this.statusCode = code;
  }
}

export default CustomError;
