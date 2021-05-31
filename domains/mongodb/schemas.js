'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ACCOUNT = new Schema({
    email: { type: String, unique: true, required: true, trim: true },
    username: { type: String, required: true, trim: true, minlength: 2 },
    role: { type: String, enum: ['admin', 'customer'] },
    password: { type: String, required: true, trim: true, minlength: 6 },
    password_confirm: { type: String, required: true, trim: true, minlength: 6 },
}).pre('save', (next) => {
    console.log('SAVE ACCOUNT');
    next();
});


const INVITEE = new Schema({
    name: String,
    message: String,
    level: String,
    area: Number, //1. male - 0. female
}).pre('save', (next) => {
    console.log('SAVE INVITEE');
    next();
});

const INVOCATION = new Schema({
    name: String,
    status: Number, //1. go , 0. pending, -1. cancel
    phone: String,
    message: String,
    inviteeId: String,
    time: { type: Date, default: Date.now},
}).pre('save', (next) => {
    console.log('SAVE INVOCATION');
    next();
});

const DATA_CONFIG = new Schema({
    male: {
        name: String,
        parent: {
            father: String,
            mother: String,
        },
        location: {
            text: String,
            map: String,
        },
        time_start: {
            date: {
                lunar: {
                    day: String,
                    month: String,
                    year: String
                },
                solar: {
                    day: String,
                    month: String,
                    year: String
                }
            },
            time: {
                hour: String,
                minute: String
            }
        },
        finances: Array ,
        email: String,
        phone: String,
        bg: String,
        bg_fb: String
    },
    female: {
        name: String,
        parent: {
            father: String,
            mother: String,
        },
        location: {
            text: String,
            map: String,
        },
        time_start: {
            date: {
                lunar: {
                    day: String,
                    month: String,
                    year: String
                },
                solar: {
                    day: String,
                    month: String,
                    year: String
                }
            },
            time: {
                hour: String,
                minute: String
            }
        },
        finances: Array,
        email: String,
        phone: String,   
        bg: String,
        bg_fb: String
    },
    default: Boolean
}).pre('save', (next) => {
    console.log('SAVE DATA_CONFIG');
    next();
});

exports.SCHEMAS = {
    ACCOUNT: ACCOUNT,
    INVITEE: INVITEE,
    INVOCATION: INVOCATION,
    DATA_CONFIG: DATA_CONFIG
};
