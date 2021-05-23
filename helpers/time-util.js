'use strict';

const sysConfig = require('../configs/system-configs');
const log = sysConfig.log();

class TimeUtil {

    constructor() {
        this._diffTime = 0;
        log.info('--------------- INIT TIME-UTIL CLASS ---------------');
    }

    setCurrentTime(serverTime) {
        let systemTime = new Date().getTime();

        this._diffTime = serverTime - systemTime;
        log.info(`systemTime: ${systemTime}, serverTime: ${serverTime}, diffTime: ${this._diffTime}`);
    }

    getCurrentTime() {
        let systemTime = new Date().getTime();
        let currentTime = systemTime + this._diffTime;

        log.info(`current time: ${currentTime}`);

        return currentTime;
    }
}

module.exports = new TimeUtil();