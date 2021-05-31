"use strict";
const express = require("express");
const Controller = require("./invocation-controller");
const validator = require("./invocation-validator");

const controller = new Controller();
const router = express.Router();

router.get('/', controller.listInvocationRender);
router.delete('/', controller.deleteInvocation);

module.exports = router;
