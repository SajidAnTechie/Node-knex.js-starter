import knex from '../db';

/**
 * Base model for models.
 *
 */
const BaseModel = {
  use: function (config = {}) {
    return class {
      constructor() {
        this._db = knex(config.name);
      }
      static fetchAll() {
        return this._db.select('*');
      }
      static insert(data, trx) {
        return this._db.insert(data, trx).then((data) => {
          if (data && Array.isArray(data)) {
            return data[0];
          }
          return data;
        });
      }
      static updateById(id, data, trx) {
        return this._db.update(id, data, trx).then((data) => {
          if (data && Array.isArray(data)) {
            return data[0];
          }
          return data;
        });
      }
      static deleteById(where) {
        return this._db.where(where).del();
      }
    };
  },
};

export default BaseModel;
