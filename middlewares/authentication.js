'use strict';


exports.requiresLogin = function (req, res, next) { 
    if (req.session && req.session.user) {
        return next();
    } else {
        return res.redirect('/manager/account/login');
    }
};

exports.requiresLogout = function (req, res, next) {
    if (req.session && req.session.user) {
        return res.json({err: 'You must be Logout in to Login continue'});
    } else {
        return next();
    }
};
