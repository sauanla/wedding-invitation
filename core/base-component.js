'use strict';

const BaseCore = require('../core/base-core');

class BaseComponent extends BaseCore {

    constructor() {
        super();
    }

    _handleResult(result, resolve) {
        return resolve(result);
    }

    _handleError(error, reject) {
        this._log.error(error);

        return reject(error);
    }

    _handleThrowError(error) {
        this._log.error(error);
        throw  error;
    }

    _generateError(message) {
        const error = {code: this._constant.ERROR_CODE.BUSINESS_COMPONENT, message: message};
        return error;
    }
}

module.exports = BaseComponent;