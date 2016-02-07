'use strict';

/* Import */
var db = require('../data/db.js');
var wordBusiness = require('../business/wordBusiness');

function initTable(cb) {

    db.knex.schema.createTableIfNotExists('words', function(table) {
        table.increments('id');
        table.string('key','30');
        table.string('word','30');
    })
        .then(function(data) {
            cb(null, data);
        })
        .catch(function(error) {
            cb(error, null);
        })
    ;
}

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
    var wordsToAdd = [];

    words.forEach(function(word) {
            var key = wordBusiness.getKey(word);
            wordsToAdd.push({key: key,word: word});
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
    initTable: initTable,
    insertWord: insertWord,
    insertWords:insertWords,
    headWord: headWord
};
