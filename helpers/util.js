'use strict';


class Util {

    static generateUuid() {
        const uuidv4 = require('uuid/v4');
        return uuidv4();
    }

}

module.exports = Util;
