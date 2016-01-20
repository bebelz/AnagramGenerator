/* Knex */
var mysql2 = require('mysql2');
var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'anagramme'
    },
    debug: true
});

module.exports = {
    knex: knex
};
