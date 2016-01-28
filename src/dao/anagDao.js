/* Import */
var db = require('../data/db.js');
var restify = require('restify');

function existsWordStartingWith(start, wordLenght, cb) {

    db.knex('words').select('*')
        .where('word', 'like', start + '%')

        .then(function (rows) {
            if (rows.length > 0) {
                cb(null, true);
            } else {
                cb(null, false);
            }
        })
        .catch(function (error) {
            console.error(error);
        })
    ;
}

module.exports = {
    existsWordStartingWith: existsWordStartingWith
};
