/* Import */
var db = require('../data/db.js');
var restify = require('restify');
var wordBusiness = require('../business/wordBusiness');

function getAnagramm(word, cb) {

    var key = wordBusiness.getKey(word);

    db.knex('words').select('word')
        .where('key',key)
        .andWhere('word', '!=', word)

        .then(function (rows) {
            if (rows.length > 0) {
                cb(null, rows);
            } else {
                cb('empty', null);
            }
        })
        .catch(function (error) {
            console.error(error);
        })
}

module.exports = {
    getAnagramm: getAnagramm
};
