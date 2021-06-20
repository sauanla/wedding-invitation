"use strict";

const BaseController = require("../../core/base-controller");
const { AREA, MODE } = require("../../helpers/constants");


class InvitationController extends BaseController {

    constructor() {
        super();

        this.defaultPage = this.defaultPage.bind(this);
        this.detailInvitation = this.detailInvitation.bind(this);
        this.bankPage = this.bankPage.bind(this);
    }

    async defaultPage(req, res) {

        try {
            let data = await this._facade.getDefaultDataConfig();

            if (!data) {
                return res.redirect("/setup")
            }
            res.render('invitation/male', {
                layout: false,
                data: {
                    mode: MODE.DEFAULT,
                    cfg: data,
                    invitee: null,
                },
            });
        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }
    }

    async detailInvitation(req, res) {
        const id = req.params.id.trim();
        try {
            let invitee = await this._facade.getDetailInvitee(id);
            let config = await this._facade.getDefaultDataConfig();

            if (!config) {
                return res.render('err/occurs-error', {
                    layout: false,
                    err: "could not load default data"
                });
            }

            if (!invitee) {
                return res.render('err/e404', {
                    layout: false,
                });
            }


            if (invitee.area === AREA.FEMALE) {
                res.render('invitation/female', {
                    layout: false,
                    data: {
                        mode: MODE.HAS_DATA,
                        cfg: config,
                        invitee: invitee,
                    },
                });
            } else if (invitee.area === AREA.MALE) {
                res.render('invitation/male', {
                    layout: false,
                    data: {
                        mode: MODE.HAS_DATA,
                        cfg: config,
                        invitee: invitee,
                    },
                });
            }


        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }
    }

    async bankPage(req, res) { 
        try {
            let data = await this._facade.getDefaultDataConfig();

            if (!data) {
                return res.render('err/occurs-error', {
                    layout: false,
                    err: "could not load default data"
                });
            }

            res.render('invitation/bank', {
                layout: false,
                data: {
                    mode: 1
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

module.exports = InvitationController;
