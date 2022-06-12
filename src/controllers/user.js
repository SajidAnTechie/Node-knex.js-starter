import HttpStatus from 'http-status-codes';
import * as userServices from '../services/user';

export const find = async (req, res, next) => {
  try {
    const data = await userServices.find();

    res.status(HttpStatus.OK).json({ data });
  } catch (err) {
    next(err);
  }
};
