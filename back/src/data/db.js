'use strict';

/* Knex */
var mysql2 = require('mysql2');
var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }//,debug: true
});

module.exports = {
    knex: knex
};
