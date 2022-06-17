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
