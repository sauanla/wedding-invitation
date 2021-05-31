"use strict";

const BaseCore = require("../../../core/base-core");
const DataConfigEntity = require("../../entities/mongodb/data-config-entity");



class DataConfiComponent extends BaseCore {
    constructor() {
        super();

        this._dataConfigEntity = new DataConfigEntity;
    }

    async getDefaultDataConfig() {

        let configs = await this._dataConfigEntity.getDefaultDataConfig();
        return configs;
    }

    async addDefaultDataConfig(data) {

        let invitees = await this._dataConfigEntity.addDefaultDataConfig(data);
        return invitees;
    }

}

module.exports = DataConfiComponent;
