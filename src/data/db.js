/* Knex */
var mysql2 = require('mysql2');
var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host     : '192.168.99.100',
        user     : 'root',
        password : 'bebelz',
        database : 'anagram'
    },
    //debug: true
});

module.exports = {
    knex: knex
};
