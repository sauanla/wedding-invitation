'use strict';
const express = require('express');
const Controller = require('./invitation-controller');
const validator = require('./invitation-validator');

const controller = new Controller();
const router = express.Router();


//manager
router.get('/', controller.list);
router.get('/:id/detail', controller.detail);

router.post('/create',
    validator.invitationValidator,
    controller.create);

router.put('/update', 
    validator.invitationValidator,
    controller.update);

router.delete('/delete',  controller.del);


module.exports = router;
