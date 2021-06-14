import { USER } from '../constants/tableConstant';

/**
 * Deleting exsting entries and seed values for 'table_name
 *
 * @param {Object} knex
 * @return {Promise}
 */
export function seed(knex) {
  return knex(USER)
    .del()
    .then(() => {
      return knex(USER).insert([
        {
          first_name: 'Sajid',
          last_name: 'Ansari',
          email: 'sajidansari33272@gmail.com',
          address: 'Kalaiya,Bara',
          designation: 'ASE',
          emp_id: 512,
          phone_number: 9817253327,
          role: 'admin',
          isHr: true,
          isAdmin: true,
        },
        {
          first_name: 'Shaym',
          middle_name: 'Prasad',
          last_name: 'Sah',
          email: 'shayam123@gmail.com',
          address: 'Kathmandu',
          designation: 'SE',
          emp_id: 555,
          phone_number: 987157897,
          role: 'user',
          isHr: true,
          isAdmin: false,
        },
      ]);
    });
}
