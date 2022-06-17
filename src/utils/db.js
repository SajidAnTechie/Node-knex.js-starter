import Knex from 'knex';
import knex from '../db';

/**
 * Returns parent transaction or new knex instance.
 *
 * @param {Knex} trx
 * @returns {Knex}
 */
export function connection(trx) {
  return trx || knex;
}

/**
 *
 * @param {string} sql
 * @param {object} params
 * @param {Knex} trx
 * @returns {Promise<[] || object>}
 */
export function raw(sql, params = {}, trx) {
  return connection(trx)
    .raw(sql, { ...params })
    .then(([result]) => result);
}

/**
 * Fetch data filtered by params.
 *
 * @param {string} table
 * @param {object} params
 * @param {Knex} trx
 * @returns {Promise}
 */
export function fetch(table, whereClause = {}, trx) {
  return connection(trx)(table).where(whereClause);
}

/**
 * Remove data.
 *
 * @param {string} table
 * @param {object} whereClause
 * @param {Knex} trx
 * @returns {Promise}
 */
export function remove(table, whereClause = {}, trx) {
  return connection(trx)(table).where(whereClause).del();
}

/**
 *
 * @param {string} table
 * @param {object} data
 * @param {Knex} trx
 * @returns {Promise}
 */
export function insert(table, data, trx) {
  return connection(trx)(table).insert(data);
}

/**
 *
 * @param {string} table
 * @param {object} data
 * @param {object} whereClause
 * @param {Knex} trx
 * @returns {Promise}
 */
export function update(table, data, whereClause = {}, trx) {
  return connection(trx)(table).where(whereClause).update(data);
}

/**
 * Batch insert data.
 *
 * @param {string} table
 * @param {Array<T>} data
 * @param {Knex} trx
 * @returns {Promise}
 */
export function batchInsert(table, data, trx) {
  return knex.batchInsert(table, data).transacting(trx);
}

/**
 * Start knex transaction.
 * If tx is null then it will start new transaction else it will return tx.
 *
 * @param {Knex} trx
 * @param {any} func
 * @returns {knex<Transaction>}
 */
export function transaction(trx, func) {
  if (trx) {
    try {
      return func(trx);
    } catch (error) {
      throw error;
    }
  }

  return knex.transaction((trx) => {
    try {
      return func(trx);
    } catch (error) {
      throw error;
    }
  });
}

/**
 * Batch Update.
 *
 * @param {string} table
 * @param {Array<T>} collection
 * @param {any} options
 * @param {Knex} tx
 * @returns {Promise}
 */
export function batchUpdate(table, collection, options, tx) {
  return transaction(tx, (trx) => {
    const queries = collection.map((tuple) => trx(table).where(options.column, tuple[options.column]).update(tuple));

    return Promise.all(queries);
  });
}

/**
 * Batch Delete.
 *
 * @param {string} table
 * @param {Array<T>} collection
 * @param {any} options
 * @param {Knex} tx
 * @returns {Promise}
 */
export function batchDelete(table, collection, options, tx) {
  return transaction(tx, (trx) => {
    const queries = collection.map((tuple) => trx(table).where(options.column, tuple[options.column]).del());

    return Promise.all(queries);
  });
}
