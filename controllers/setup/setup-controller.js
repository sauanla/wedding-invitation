"use strict";

const BaseController = require("../../core/base-controller");
const SeeDB = require("../../domains/mongodb/seed-db");


class SetupController extends BaseController {

    constructor() {
        super(); 
        this.setupPage = this.setupPage.bind(this); 
    }
 
    async setupPage(req, res) {  
        try {
            let config = await this._facade.getDefaultDataConfig();
            if (!config) { // neu bang null == chua co du lieu 
               let configInput = SeeDB.dataConfig;
               await this._facade.addDefaultDataConfig(configInput);
               // them user 

               let userInput = SeeDB.user;
               await this._facade.addAccount(userInput);

              return res.redirect("/invitation")
            }else {
                let userInput = SeeDB.user;
                await this._facade.addAccount(userInput);
            }
            return res.redirect("/invitation")
        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }
    }
}

module.exports = SetupController;
