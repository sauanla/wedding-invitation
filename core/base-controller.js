'use strict';

const BaseCore = require('../core/base-core');
const HandleResult = require('../domains/handleResult');
const Facade = require('../business/facade/facade');
const {validationResult} = require('express-validator');

class BaseController extends BaseCore {

    constructor() {
        super();
        this._facade = new Facade();
    }

    _handleResult(result, res) {
        res.send(new HandleResult(true, result));
    }

    _handleError(error, res) {
        this._log.error(error);

        res.send(new HandleResult(false, null, [{
            code: error.code || this._constant.ERROR_CODE.CONTROLLER,
            text: error.message || error
        }]));
    }

    _handleValidationResult(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const errArr = errors.array().map(error => {
                return {code: this._constant.VALIDATOR, text: error.msg};
            });

            res.send(new HandleResult(false, null, errArr));

            return errArr;
        }

        return null;
    }
}

module.exports = BaseController;