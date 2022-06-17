import * as user from '../models/User';
import * as genericModel from '../models/Model';
import { USERS } from '../constants/tableConstant';

/**
 * Fetch all users.
 *
 * @returns {any}
 */
export async function find(params) {
  const data = await user.fetch(params);

  return data;
}

export async function findById(id) {
  const data = await genericModel.fetchBy(USERS, { id });

  return data[0];
}

export async function create(body) {
  const data = await genericModel.create(USERS, body);

  return data;
}

export async function update(id, body) {
  const data = await genericModel.update(USERS, body, { id });

  return data;
}

export async function deleteById(id) {
  const data = await genericModel.remove(USERS, { id });

  return data;
}
