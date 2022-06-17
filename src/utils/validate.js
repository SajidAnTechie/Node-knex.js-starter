import logger from './logger';

export function validate(data, schema) {
  const options = { abortEarly: false };
  const { error, value } = schema.validate(data, options);

  if (error) {
    logger.error(error);
    return Promise.reject(error);
  }

  return Promise.resolve(value);
}
