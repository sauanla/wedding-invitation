"use strict";

const BaseController = require("../../core/base-controller");
const { AREA, MODE } = require("../../helpers/constants");


class BankController extends BaseController {

    constructor() {
        super(); 
        this.bankPage = this.bankPage.bind(this); 
    }

   
    async bankPage(req, res) {
 
        try {
            let config = await this._facade.getDefaultDataConfig();

            if (!config) {
                return res.render('err/occurs-error', {
                    layout: false,
                    err: "could not load default data"
                });
            }
 
            res.render('invitation/bank', {
                layout: false,
                data: {
                    cfg: config
                },
            });
        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }
    }
}

module.exports = BankController;
