/* Import */
var db = require('../data/db.js');

function insertWord(word,cb) {

    db.knex('dico').insert({word: word})

        .then(function(rows) {
            cb(true);
        })
        .catch(function(error) {
            cb(false);
        })
    ;
}

function headWord(word, cb) {

    db.knex('dico').select('*')
        .where({word: word})

        .then(function(rows) {
            if(rows.length > 0) {
                cb(true);
            } else {
                cb(false);
            }
        })
        .catch(function(error) {
            console.error(error);
        })
    ;
}



module.exports = {
    insertWord: insertWord,
    headWord: headWord
};
