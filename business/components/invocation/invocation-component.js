"use strict";

const BaseCore = require("../../../core/base-core");
const InvocationEntity = require("../../entities/mongodb/invocation-entity"); 


class InvocationComponent extends BaseCore {
    constructor() {
        super();

        this._invocationEntity = new InvocationEntity;
    }

    async getListInvocation() {

        let invocations = await this._invocationEntity.list();
        return invocations;
    }


    async getDetailInvocation(id) {
        if (!id) {
            throw 'Invalid input'
        }

        let invocation = await this._invocationEntity.findById(id);
        return invocation;
    }

    async updateInvocation(id, invocation) {
        if (!invocation) {
            throw 'Invalid input'
        }

        let result = await this._invocationEntity.update(id, invocation);

        if (!result) {
            throw 'An occurs err'
        }

        return result;
    }
    async addInvocation(invocation) {
        if (!invocation) {
            throw 'Invalid input'
        }

        let result = await this._invocationEntity.add(invocation);

        if (!result) {
            throw 'An occurs err'
        }

        return result;
    }
    async delInvocation(id) {
        if (!id) {
            throw 'Invalid input'
        }

        let invocation = await this._invocationEntity.findById(id);

        if (!invocation) {
            throw 'Invocation does not exist'
        }

        await this._invocationEntity.remove(id);
        return true;
    }

}

module.exports = InvocationComponent;
