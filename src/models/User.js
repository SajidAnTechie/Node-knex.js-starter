import BaseModel from './Model';
import { USERS } from '../constants/tableConstant';

/**
 * Model class for users.
 *
 */
class User extends BaseModel.use({
  name: USERS,
}) {
  constructor(payload) {
    super(payload);
  }
}

export default User;
