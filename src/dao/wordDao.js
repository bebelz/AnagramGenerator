/* Import */
var db = require('../data/db.js');

function insertWord(word,cb) {

    db.knex('words').insert({word: word})

        .then(function(rows) {
            cb(true);
        })
        .catch(function(error) {
            cb(false);
        })
    ;
}

/*
* PREC : words is an Array
* PREC : words's size doesn't exceed batch size
*/
function insertWords(words,cb) {
    var wordsToAdd = new Array();

    words.forEach(function(word) {
            wordsToAdd.push({word: word});
        }
    );

    db.knex('words').insert(wordsToAdd)

        .then(function(rows) {
            cb(true);
        })
        .catch(function(error) {
            cb(false);
        })
    ;
}

function headWord(word, cb) {

    db.knex('words').select('*')
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
    insertWords:insertWords,
    headWord: headWord
};
