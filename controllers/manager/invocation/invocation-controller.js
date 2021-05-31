"use strict";

const BaseController = require("../../../core/base-controller");

class InvocationController extends BaseController {

    constructor() {
        super();

        this.listInvocationRender = this.listInvocationRender.bind(this);
        this.deleteInvocation = this.deleteInvocation.bind(this);

    }
    async listInvocationRender(req, res) {
        try {
            let invocations = await this._facade.getListInvocation();
 
            res.render('manager/invocation/index', {
                invocations
            });

        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }
    }

    async deleteInvocation(req, res) { 

        const id = req.body.id;
        try {

            const invocation = await this._facade.getDetailInvocation(id);

            if(!invocation){
                return  this._handleError('invocation does not exist', res);
            }

            let data = await this._facade.delInvocation(id);
            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }

    }
}

module.exports = InvocationController;
