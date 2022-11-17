import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';
import CustomError from '../errors/customError';
import logger from './logger';

/**
 * Verify jwt token.
 *
 * @param {String} token
 * @param {String} secret
 * @returns
 */
const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);

    return decoded;
  } catch (error) {
    logger.error(error);
    throw new CustomError(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED);
  }
};

export default verifyToken;
