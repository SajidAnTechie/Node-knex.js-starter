import * as db from '../utils/db';
import * as genericModel from './Model';
import { USERS } from '../constants/tableConstant';

export function fetch(filter = {}, trx) {
  const query = db.connection(trx)(`${USERS} as user`).select().where(filter);

  return query;
}
