import HttpStatus from 'http-status-codes';
import * as userServices from '../services/user';

/**
 * Fetch all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const find = async (req, res, next) => {
  try {
    const data = await userServices.find();

    res.status(HttpStatus.OK).json({ data });
  } catch (err) {
    next(err);
  }
};
