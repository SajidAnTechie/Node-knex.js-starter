import * as user from '../models/User';

/**
 * Fetch all users.
 *
 * @returns {any}
 */
export async function find(params) {
  const data = await user.fetch(params);

  return data;
}
