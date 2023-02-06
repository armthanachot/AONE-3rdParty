/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */
"use strict";
exports.__esModule = true;
exports.BITLY = exports.ONESIGNAL = exports.MAILER = exports.APP = exports.MYSQL = exports.PORT = void 0;
var PORT = 3300;
exports.PORT = PORT;
var MYSQL = {
    queueLimit: 0,
    connectionLimit: 120,
    multipleStatements: true,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    debug: false
};
exports.MYSQL = MYSQL;
var APP = {
    title: "AllkonsOne API",
    description: ".",
    keywords: "."
};
exports.APP = APP;
var MAILER = {
    from: "name <username@mail.com>",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "username@mail.com",
        pass: "password"
    }
};
exports.MAILER = MAILER;
var ONESIGNAL = {
    app_id: "",
    user_auth_key: "",
    app_auth_key: ""
};
exports.ONESIGNAL = ONESIGNAL;
var BITLY = {
    client_id: "",
    client_secret: "",
    token: ""
};
exports.BITLY = BITLY;
