"use strict";

const BaseController = require("../../../core/base-controller");


const validator = require('validator');


class AccountController extends BaseController {

    constructor() {
        super();

        this.loginRender = this.loginRender.bind(this);
        this.login = this.login.bind(this);

    }


    async loginRender(req, res) {
        res.render('manager/account/login', {
            layout: false,
            captcha: res.recaptcha
        });
    }

    async login(req, res) {

        try { 
            if (!req.recaptcha.error) {

                let param = {
                    username: req.body.username,
                    password: req.body.password
                };

                let result = await this._facade.verifyAccount(param);

                let user = {
                    email: result.user.email,
                    username: result.user.username,
                }

                req.session.user = user;

                if (!result || !result.status) {
                    this._handleError({
                        code: 401,
                        text: result.message
                    }, res);
                }

                this._handleResult(user, res);
            } else {
                this._handleError('Please valid reCaptcha', res);
            }
        } catch (e) {
            this._handleError(e, res);
        }
    }

    async logout(req, res) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    return res.json({ err });
                } else {
                    return res.json({ logout: 'Success' });
                }
            });
        }
    }
}

module.exports = AccountController;
