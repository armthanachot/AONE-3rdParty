"use strict";
exports.__esModule = true;
exports["default"] = {
    development: {
        client: 'mysql',
        connection: {
            host : '103.58.148.212',
            user : 'admin_allkonsone',
            password : 'allkons_one',
            database : 'admin_allkonsone'
        },
        migrations: {
            tableName: '3rd_migrations',
            directory: __dirname + '/config/migrations'
        },
        seeds: {
            tableName: '3rd_seeds',
            directory: __dirname + '/config/seeds'
        }
    }
};
