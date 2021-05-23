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
            throw {
                message: "Invalid input"
            }
        }

        let invocation = await this._invocationEntity.findById(id);
        return invocation;
    }

    async updateInvocation(id, invocation) {
        if (!invocation) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._invocationEntity.update(id, invocation);

        if (!result) {
            throw {
                message: "An occurs err"
            } 
        }

        return result;
    }
    async addInvocation(invocation) {
        if (!invocation) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._invocationEntity.add(invocation);

        if (!result) {
            throw {
                message: "An occurs err"
            } 
        }

        return result;
    }
    async delInvocation(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let invocation = await this._invocationEntity.findById(id);

        if (!invocation) {
            throw {
                message: "Invocation does not exist"
            }  
        }

        await this._invocationEntity.remove(id);
        return true;
    }

}

module.exports = InvocationComponent;
