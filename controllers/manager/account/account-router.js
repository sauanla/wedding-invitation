"use strict";

const auth = require('../../../middlewares/authentication');
const express = require("express");
const Controller = require("./account-controller");
const validator = require("./account-validator");

const controller = new Controller();
const router = express.Router();

const recaptchaModel = require('express-recaptcha').RecaptchaV3;

const recaptcha = new recaptchaModel(
    process.env.SITE_KEY,
    process.env.SECRET_KEY,
    {
        callback: 'cb',
    }
);


router.get("/login", recaptcha.middleware.renderWith({hl: 'vi'}), auth.requiresLogout, controller.loginRender);
router.post("/login", recaptcha.middleware.verify, auth.requiresLogout, controller.login);
router.get("/logout", auth.requiresLogin, controller.logout);

module.exports = router;
