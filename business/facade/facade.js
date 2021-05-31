'use strict';

const BaseCore = require('../../core/base-core');
const AccountComponent = require('../components/account/account-component');
const InvitationComponent = require('../components/invitation/invitation-component');
const InvocationComponent = require('../components/invocation/invocation-component');
const DataConfiComponent = require('../components/data-config/data-config-component');

class Facade extends BaseCore {

    constructor() {
        super();

        this._accountComponent = new AccountComponent;
        this._invitationComponent = new InvitationComponent;
        this._dataConfiComponent = new DataConfiComponent;
        this._invocationComponent = new InvocationComponent;
    }


    // invitation
    async updateInvocation(id, invocation) {
        return this._invocationComponent.updateInvocation(id, invocation);
    }
    async addInvocation(invocation) {
        return this._invocationComponent.addInvocation(invocation);
    }

    async delInvocation(id) {
        return this._invocationComponent.delInvocation(id);
    }

    async getDetailInvocation(id) {
        return this._invocationComponent.getDetailInvocation(id);
    }
    async getListInvocation() {
        return this._invocationComponent.getListInvocation();
    }

    // invitation
    async updateInvitee(id, invitee) {
        return this._invitationComponent.updateInvitee(id, invitee);
    }
    async addInvitee(invitee) {
        return this._invitationComponent.addInvitee(invitee);
    }

    async delInvitee(id) {
        return this._invitationComponent.delInvitee(id);
    }

    async getDetailInvitee(id) {
        return this._invitationComponent.getDetailInvitee(id);
    }
    async getListInvitee() {
        return this._invitationComponent.getListInvitee();
    }

    // account
    async verifyAccount(input) {
        return this._accountComponent.verifyAccount(input);
    }

    async addAccount(input) {
        return this._accountComponent.addAccount(input);
    }
    // configuration
    async getDefaultDataConfig() {
        return this._dataConfiComponent.getDefaultDataConfig();
    }

    async addDefaultDataConfig(data) {
        return this._dataConfiComponent.addDefaultDataConfig(data);
    }

}

module.exports = Facade;
