'use strict';

const BaseEntityMongoDb = require('../../../core/base-entity-mongodb');
const model = require('../../../helpers/constants').MONGODB.INSTANCES.ACCOUNT;
const schema = require('../../../domains/mongodb/schemas').SCHEMAS.ACCOUNT;

class AccountEntity extends BaseEntityMongoDb {

    constructor() {
        super(model, schema);
    }


    findOne(username, fieldObj = null) {
        return this._model.findOne({
            username: username
        }, fieldObj);
    }

    add(data) {
        let newObj = new this._model(data);
        return newObj.save();
    }

}

module.exports = AccountEntity;
