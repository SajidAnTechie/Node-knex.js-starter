import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';
import createError from '../errors/createError';

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
    if (error) throw createError(HttpStatus.UNAUTHORIZED, HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED));
  }
};

export default verifyToken;
