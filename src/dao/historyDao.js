'use strict';

/* Import */
const db = require('../data/db.js');

const TABLE_NAME = 'history';

function initTable(cb) {

    db.knex.schema.createTableIfNotExists(TABLE_NAME, function(table) {
            table.increments('id');
            table.string('word','30');
            table.dateTime('date').defaultTo(db.knex.fn.now());
        })

        .then(function(data) {
            cb(null, data);
        })
        .catch(function(error) {
            cb(error, null);
        })
    ;
}

function insertHistory(word, cb) {

    db.knex(TABLE_NAME).insert({word: word})

        .then(function(rows) {
            cb(null, rows);
        })
        .catch(function(error) {
            cb(error, null);
        })
    ;
}

module.exports = {
    initTable: initTable,
    insertHistory: insertHistory
};