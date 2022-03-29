import User from '../models/User';

export const find = async () => {
  const results = await new User().fetchAll();
  return results;
};
