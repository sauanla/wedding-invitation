"use strict";

const BaseCore = require("../../../core/base-core");
const DataConfigEntity = require("../../entities/mongodb/data-config-entity");



class DataConfiComponent extends BaseCore {
    constructor() {
        super();

        this._dataConfigEntity = new DataConfigEntity;
    }

    async getDefaultDataConfig() {

        let invitees = await this._dataConfigEntity.getDefaultDataConfig();
        return invitees;
    }

}

module.exports = DataConfiComponent;
