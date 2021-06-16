import { USERS } from '../constants/tableConstant';

/**
 * Create table 'users'
 *
 * @param {Object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable(USERS, (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('middle_name').nullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('address').notNullable();
    table.string('designation').notNullable();
    table.integer('emp_id').notNullable();
    table.bigInteger('phone_number').notNullable();
    table.enu('role', ['user', 'admin', 'hr']).notNullable();
    table.boolean('isHr').notNullable().defaultTo(false);
    table.boolean('isAdmin').notNullable().defaultTo(false);
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'));
  });
}

/**
 * Drop a table
 *
 * @param {Object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable(USERS);
}
