'use strict';

const mongoose = require('mongoose');
const BaseCore = require('../core/base-core');

class BaseEntityMongoDb extends BaseCore {

    constructor(model, schema) {
        super();
        this._model = mongoose.model(model, schema);
    }
}

module.exports = BaseEntityMongoDb;