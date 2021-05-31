'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.redirect("/invitation")
});

router.use('/invitation', require('./invitation/invitation-router'));
router.use('/invocation', require('./invocation/invocation-router'));

router.use('/bank', require('./bank/bank-router'));

router.use('/manager', require('./manager'));

router.use('/setup', require('./setup/setup-router'));

module.exports = router;
