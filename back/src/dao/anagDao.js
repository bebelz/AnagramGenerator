'use strict';

/* Import */
const db = require('../data/db.js');
const restify = require('restify');
const wordBusiness = require('../business/wordBusiness');

function getAnagramm(word, cb) {

    var key = wordBusiness.getKey(word);

    db.knex('words').select('word')
        .where('key',key)
        .andWhere('word', '!=', word)

        .then(function (rows) {
            if (rows.length > 0) {
                cb(null, rows);
            } else {
                // No Anagagram found
                cb('empty', null);
            }
        })
        .catch(function (error) {
            cb(error, null);
        })
    ;
}

module.exports = {
    getAnagramm: getAnagramm
};
