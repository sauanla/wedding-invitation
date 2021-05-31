'use strict';
const {body} = require('express-validator');

exports.invitationValidator = [
    body('invitee')
        .exists().withMessage('invitee is required')
        .isObject().withMessage('invitee must be an object'),
    body('invitee.name').exists()
        .withMessage('name is required'),
    body('invitee.area')
        .exists().withMessage('Area a required')
        .isNumeric().withMessage('Area must be select')

];

