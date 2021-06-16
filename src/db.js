import knexJs from 'knex';
import knexConfig from './knexfile';
import toSnakeCase from 'to-snake-case';
import camelcaseKeys from 'camelcase-keys';

const additonalConfig = {
  ...knexConfig,
  pool: {
    min: 2,
    max: 6,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false,
  },
  wrapIdentifier: (value, origImpl) => {
    if (value === '*') {
      return origImpl(value);
    }
    return origImpl(toSnakeCase(value));
  },
  postProcessResponse: (result) => {
    if (Array.isArray(result)) {
      if (result.length === 0 || !result[0] || typeof result[0] != 'object') {
        return result;
      } else {
        return camelcaseKeys(result, { deep: true });
      }
    }
  },
};

const knex = knexJs(additonalConfig);

export default knex;
