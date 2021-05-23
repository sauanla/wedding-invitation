'use strict';

const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/authentication');
/* GET login. */
router.get('/', (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/manager/invitation');
    } else {
        return res.redirect('/manager/account/login');
    }
});

router.use('/invitation', auth.requiresLogin, require('./invitation/invitation-router'));
router.use('/invocation', auth.requiresLogin, require('./invocation/invocation-router'));
router.use('/account', require('./account/account-router'));

module.exports = router;
