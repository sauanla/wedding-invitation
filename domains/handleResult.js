'use strict';

class HandleResult {

    constructor(success, data, messageList) {
        this.success = success || false;
        this.data = data || {};
        this.messageList = messageList || [];
    }
}

module.exports = HandleResult;
