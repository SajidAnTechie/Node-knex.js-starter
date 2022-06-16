import User from '../models/User';

/**
 * Fetch all users.
 *
 * @returns {any}
 */
export async function find() {
  const data = await new User().fetchAll();

  return data;
}
