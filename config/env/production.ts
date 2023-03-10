/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */
"use strict"

const PORT = 3300
const MYSQL = {
  queueLimit: 0, // unlimited queueing
  connectionLimit: 120, // unlimited connections
  multipleStatements: true,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  debug: false,
}

const APP = {
  title: "AllkonsOne API",
  description: ".",
  keywords: ".",
}
const MAILER = {
  from: "name <username@mail.com>",
  host: "smtp.gmail.com",
  port: 465, // 25, 465, 587 depend on your
  auth: {
    user: "username@mail.com", // user account
    pass: "password", // user password
  },
}
const ONESIGNAL = {
  app_id: "",
  user_auth_key: "",
  app_auth_key: "",
}
const BITLY = {
  client_id: "",
  client_secret: "",
  token: "",
}

export { PORT, MYSQL, APP, MAILER, ONESIGNAL, BITLY }
