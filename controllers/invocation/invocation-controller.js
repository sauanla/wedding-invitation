"use strict";

const BaseController = require("../../core/base-controller");
 
class InvocationController extends BaseController {

    constructor() {
        super();

        this.createInvocationRender = this.createInvocationRender.bind(this);
        this.createInvocation = this.createInvocation.bind(this);
        
    }
    async createInvocationRender(req, res) {
        const id = req.params.id.trim();
        try {
            let invitee = await this._facade.getDetailInvitee(id);

            if (!invitee) {
                return res.render('err/e404', {
                    layout: false,
                });
            }

            res.render('invocation/create', {
                layout: false,
                captcha: res.recaptcha,
                invitee: invitee,
            });

        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }
    }
    async createInvocation(req, res) { 
        try { 
            if (!req.recaptcha.error) {

                if (this._handleValidationResult(req, res)){
                    return false;
                }
              
                const invocation = req.body.invocation;  
                if (invocation) {
                    let result = await this._facade.addInvocation(invocation);
                    this._handleResult({
                        id: invocation.inviteeId
                    }, res);
                }else{
                    this._handleError('Invalid data', res);
                }
            } else {
                this._handleError('Please valid reCaptcha', res);
            }
        } catch (error) { 
            this._handleError(error, res);
        }
    }
}

module.exports = InvocationController;
