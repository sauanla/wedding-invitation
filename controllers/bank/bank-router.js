"use strict";
const express = require("express");
const Controller = require("./bank-controller");

const controller = new Controller();
const router = express.Router();

router.get("/", controller.bankPage); 

module.exports = router;
