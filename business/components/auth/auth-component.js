"use strict";

const BaseCore = require("../core/base-core");
let jwt = require("jsonwebtoken");

class AuthComponent extends BaseCore {
    constructor() {
        super();
    }

    verifyAccountToken(token) {
        if (token) {
            if (token.startsWith("Bearer ")) {
                // Remove Bearer from string
                token = token.slice(7, token.length);
            }

            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return {
                        success: false,
                        message: "Token is not valid",
                    };
                } else {
                    return {
                        success: true,
                        data: decoded
                    };
                }
            });
        } else {
            return {
                success: false,
                message: "Auth token is not supplied",
            };
        }
    }
}

module.exports = AuthComponent;
