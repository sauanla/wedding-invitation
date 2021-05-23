'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./configs/system-configs');
const timeout = require('connect-timeout'); //express v4
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');

const app = express();

require('./configs/mongo-db');

// view engine setup

app.use(express.static(__dirname + '/public'));
app.use(timeout(120000));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractScripts', true);

app.use(logger('dev', {}));

app.use(bodyParser.urlencoded({ extended: true, limit: config.bodyParserUrlencodedLimit }));
app.use(bodyParser.json({ limit: config.bodyParserJsonLimit }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
        secret: 'work hard',
        resave: true,
        saveUninitialized: false
    })
);

app.use('/', require('./controllers'));

// catch 404 and forward to error handler

app.use('*', function (req, res) {
    res.render('err/e404', {
        layout: false,
    });
});


// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
