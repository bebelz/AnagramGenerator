'use strict';

/* Import */
const wordDao = require('../dao/wordDao');
const readline = require('readline');
const fs = require('fs');

const BATCH_SIZE = 1000;

function initTable(cb) {
    wordDao.initTable(cb);
}

function insertWordsWithFile(req, res, next) {

    const rl = readline.createInterface({
        input: fs.createReadStream(req.files.file.path)
    });

    var cpt = 0;
    var words = [];
    rl.on('line', function (line) {
        if(cpt == BATCH_SIZE) {
            wordDao.insertWords(words,function(){});
            words = [];
            cpt = 0;
        } else {
            words.push(line);
            cpt++;
        }
    });
    rl.on('close', function() {
        wordDao.insertWords(words,function(){});
        res.send(200);
    });
}

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



module.exports = {
    initTable: initTable,
    insertWord: insertWord,
    insertWordsWithFile:insertWordsWithFile,
    headWord: headWord
};
