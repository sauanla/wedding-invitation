'use strict';

const BaseEntityMongoDb = require('../../../core/base-entity-mongodb');
const model = require('../../../helpers/constants').MONGODB.INSTANCES.DATA_CONFIG;
const schema = require('../../../domains/mongodb/schemas').SCHEMAS.DATA_CONFIG;

class DataConfigEntity extends BaseEntityMongoDb {

    constructor() {
        super(model, schema);
    }


    getDefaultDataConfig(fieldObj = null) {
        return this._model.findOne({
            default: true
        }, fieldObj);
    }

    addDefaultDataConfig(data) { 
        let newObj = new this._model(data);
        return newObj.save();
    }
}

module.exports = DataConfigEntity;
