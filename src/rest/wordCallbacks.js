/* Import */
var wordDao = require('../dao/wordDao.js');
var wordBusiness = require('../business/wordBusiness.js');
var wait = require('wait.for');

function insertWord(req, res, next) {
    const word = req.params.word;

    wordDao.insertWord(word, function(bool) {
        if(bool) {
            res.send(201,'word added');
        } else {
            res.send(500);
        }
    })
}

function headWord(req, res, next) {
    const word = req.params.word;

    wordDao.headWord(word, function(bool) {
            if (bool) {
                res.send(200);
            } else {
                res.send(404);
            }
        }
    );
}

function getAnagram(req, res, next) {
    const word = req.params.word;

    wordBusiness.getAnagram(word, function (anagrammList) {
        console.log(anagrammList);
        if (typeof anagrammList !== 'undefined') {
            res.send(200);
        } else {
            res.send(404);
        }
    }
    );
}

module.exports = {
    insertWord: insertWord,
    headWord: headWord,
    getAnagram: getAnagram
};
