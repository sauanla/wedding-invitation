"use strict";

const BaseCore = require("../../../core/base-core");
const InviteeEntity = require("../../entities/mongodb/invitee-entity");
const bcrypt = require("bcrypt");


class InviationComponent extends BaseCore {
    constructor() {
        super();

        this._inviteeEntity = new InviteeEntity;
    }

    async getListInvitee() {

        let invitees = await this._inviteeEntity.list();
        return invitees;
    }


    async getDetailInvitee(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let invitee = await this._inviteeEntity.findById(id);
        return invitee;
    }

    async updateInvitee(id, invitee) {
        if (!invitee) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._inviteeEntity.update(id, invitee);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async addInvitee(invitee) {
        if (!invitee) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._inviteeEntity.add(invitee);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async delInvitee(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let invitee = await this._inviteeEntity.findById(id);

        if (!invitee) {
            throw {
                message: "Invitee does not exist"
            }

        }

        await this._inviteeEntity.remove(id);
        return true;
    }

}

module.exports = InviationComponent;
