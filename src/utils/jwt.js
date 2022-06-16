import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';
import CustomError from '../errors/customError';

/**
 * Verify jwt token.
 *
 * @param {String} token
 * @param {String} secret
 * @returns
 */
const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    if (error) throw new CustomError(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED);
  }
};

export default verifyToken;
