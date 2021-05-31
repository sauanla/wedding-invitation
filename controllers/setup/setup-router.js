"use strict";
const express = require("express");
const Controller = require("./setup-controller");

const controller = new Controller();
const router = express.Router();

router.get("/", controller.setupPage); 

module.exports = router;
