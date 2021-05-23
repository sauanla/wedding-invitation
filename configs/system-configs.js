'use strict';

require('dotenv').config();
const bunyan = require('bunyan');

const log = {
    development: () => {
        return bunyan.createLogger({name: 'development', level: 'debug'});
    },
    production: () => {
        return bunyan.createLogger({name: 'production', level: 'info'});
    },
    test: () => {
        return bunyan.createLogger({name: 'test', level: 'fatal'});
    }
};

module.exports = {
    name: process.env.NAME,
    siteKey: process.env.SITE_KEY,
    secretKey: process.env.SECRET_KEY,
    uri: process.env.URI_MONGO,
    domain: process.env.DOMAIN,
    bodyParserUrlencodedLimit: process.env.BODY_PARSER_URLENCODED_LIMIT,
    bodyParserJsonLimit: process.env.BODY_PARSER_JSON_LIMIT,
    log: (env) => {
        if (env) return log[env]();
        return log['development']();
    }
};
