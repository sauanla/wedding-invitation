"use strict";
const express = require("express");
const Controller = require("./invitation-controller");

const controller = new Controller();
const router = express.Router();

router.get("/", controller.defaultPage);
router.get('/:id', controller.detailInvitation);
router.get('/bank', controller.bankPage);

module.exports = router;
