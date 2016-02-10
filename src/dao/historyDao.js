'use strict';

/* Import */
const db = require('../data/db');

const TABLE_NAME = 'history';

function initTable(cb) {

    db.knex.schema.createTableIfNotExists(TABLE_NAME, function(table) {
            table.increments('id');
            table.string('word','30');
            table.dateTime('date').defaultTo(db.knex.fn.now());
            table.integer('status');
        })

        .then(function(data) {
            cb(null, data);
        })
        .catch(function(error) {
            cb(error, null);
        })
    ;
}

/*
 * cb is Optionnal
 */
function insertHistory(word, status, cb) {

    db.knex(TABLE_NAME).insert({word: word, status: status})

        .then(function(rows) {
            if(cb) {
                cb(null, rows);
            }
        })
        .catch(function(error) {
            if(cb) {
                cb(error, null);
            }
        })
    ;
}

module.exports = {
    initTable: initTable,
    insertHistory: insertHistory
};