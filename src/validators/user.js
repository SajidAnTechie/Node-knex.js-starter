import * as Joi from 'joi';

export const userCreateSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  middleName: Joi.string().allow(null).optional(),
  lastName: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
  address: Joi.string().required(),
  designation: Joi.string().required(),
  empId: Joi.number().required(),
  phoneNumber: Joi.number().required(),
});

export const userQueryParamsSchema = Joi.object().keys({
  q: Joi.string().optional(),
  empId: Joi.string().optional(),
  email: Joi.email().optional(),
  bloodGroup: Joi.string().optional(),
  page: Joi.number().optional(),
  size: Joi.number().optional(),
});
