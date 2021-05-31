"use strict";

const systemConfigs = require("../../../configs/system-configs");
const BaseController = require("../../../core/base-controller");


class InvitationController extends BaseController {

    constructor() {
        super();

        this.list = this.list.bind(this);
        this.detail = this.detail.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.del = this.del.bind(this);
    }

    async list(req, res) {

        try {
            let data = await this._facade.getListInvitee();

            res.render('manager/invitation/index', {
                invitees: data,
                uri: systemConfigs.domain
            });
        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }

    }

    async detail(req, res) {
        try {
            let id = req.params.id.trim();
            let data = await this._facade.getDetailInvitee(id);

            this._handleResult(data, res);
            
        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async create(req, res) {
        try {
            if (this._handleValidationResult(req, res)){
                return false;
            }
            let invitee = {
                name: req.body.invitee.name,
                message: req.body.invitee.message,
                level: req.body.invitee.level,
                area: Number(req.body.invitee.area),
            };

            let data = await this._facade.addInvitee(invitee);

            this._handleResult(data, res);
        } catch (error) {
            console.log(error);
            this._handleError({
                code: 500,
                message: error.message
            }, res);
        }
    }

    async update(req, res) {
        try {
            if (this._handleValidationResult(req, res)){
                return false;
            }
            let invitee = {
                id: req.body.invitee.id,
                name: req.body.invitee.name,
                message: req.body.invitee.message,
                level: req.body.invitee.level,
                area: Number(req.body.invitee.area),
            };

            let data = await this._facade.updateInvitee(invitee.id, invitee);

            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async del(req, res) {
        const id = req.body.id;
        try {

            const invitee = await this._facade.getDetailInvitee(id);

            if(!invitee){
                return  this._handleError('Invitee does not exist', res);
            }

            let data = await this._facade.delInvitee(id);
            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }

    }
}

module.exports = InvitationController;
