'use strict';

// Import the mongoose module
const mongoose = require('mongoose');
const sysConfig = require('./system-configs');
const log = sysConfig.log();

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(sysConfig.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => {
    log.info('Successfully connected to the mongodb database');
}).catch(err => {
    log.info('Could not connect to the database. Exiting now...', err);
    process.exit();
});
