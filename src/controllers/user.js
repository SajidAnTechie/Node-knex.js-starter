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
    const data = await userServices.find(req.query);

    res.status(HttpStatus.OK).json({ data });
  } catch (err) {
    next(err);
  }
};

export const findById = async (req, res, next) => {
  try {
    const data = await userServices.findById(req.params.id);

    res.status(HttpStatus.OK).json({ data });
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const data = await userServices.create(req.body);

    res.status(HttpStatus.CREATED).json({ data });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await userServices.update(req.params.id, req.body);

    res.status(HttpStatus.OK).json({ data });
  } catch (err) {
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    const data = await userServices.deleteById(req.params.id);

    res.status(HttpStatus.OK).json({ data });
  } catch (err) {
    next(err);
  }
};
