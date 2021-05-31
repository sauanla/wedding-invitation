"use strict";

const BaseCore = require("../../../core/base-core");
const AccountEntity = require("../../entities/mongodb/account-entity");
const bcrypt = require("bcrypt");


class AccountComponent extends BaseCore {
    constructor() {
        super();

        this._accountEntity = new AccountEntity;
    }

    async verifyAccount(userInput) {


        if (!userInput) {
            return {
                status: false,
                message: 'Invalid input'
            }
        }


        let account = await this._accountEntity.findOne(userInput.username);
        if (!account) {
            return {
                status: false,
                message: 'Username and Password are incorrect'
            }
        }


        let isValidPass = await bcrypt.compareSync(userInput.password, account.password);

        if (isValidPass) { 
            return {
                status: true,
                user: account,
                message: 'Success',
            };

        } else {
            return {
                status: false,
                message: 'Username and Password are incorrect',
            };
        }

    }

    async addAccount(userInput) {


        if (!userInput) {
            return {
                status: false,
                message: 'Invalid input'
            }
        }


        let account = await this._accountEntity.findOne(userInput.username);
        if (!account) {
            await this._accountEntity.add(userInput);
            return {
                status: false,
                message: 'Username and Password are incorrect'
            }
        }else{
            return {
                status: false,
                message: 'Username has exist'
            }
        }
    }
}

module.exports = AccountComponent;
