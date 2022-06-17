import Knex from 'knex';
import * as db from '../utils/db';

/**
 * Generic Model for CRUD operations
 */

/**
 * fetch Model data.
 *
 * @param {string} model
 * @param {Knex} trx
 * @return {Promise<User[]>}
 */
export function fetchAll(model, trx) {
  return db.connection(trx)(model).select();
}

/**
 * fetch Model By.
 *
 * @param {string} model
 * @param {any} whereClause
 * @param {Knex} trx
 * @returns {Promise}
 */
export function fetchBy(model, whereClause, trx) {
  return db.connection(trx).where(whereClause).select();
}

/**
 * Create Model.
 *
 * @param {string} model
 * @param {any} data
 * @param {Knex} trx
 * @returns {Promise<Object>}
 */
export function create(model, data, trx) {
  return db.insert(model, data, trx);
}

/**
 * Update Model data.
 *
 * @param {string} model
 * @param {any} data
 * @param {Knex} trx
 * @returns {Promise<Object>}
 */
export function update(model, data, trx) {
  return db.update(model, data, trx);
}

/**
 *
 * @param {string} model
 * @param {any} whereClause
 * @param {Knex} trx
 * @returns {Promise<Object>}
 */
export function remove(model, whereClause, trx) {
  return db.remove(model, whereClause, trx);
}

/**
 *
 * @param {string} model
 * @param {any} where
 * @param {Knex} trx
 * @returns {Promise<Object>}
 */
export function fetchByMultipleOrWhereClause(model, where, trx) {
  return db
    .connection(trx)(model)
    .select()
    .where((builder) => {
      Object.keys(where).forEach((key) => {
        builder.orWhere(key, where[key]);
      });
    });
}
