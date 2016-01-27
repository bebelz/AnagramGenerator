/* Import */
var wordDao = require('../dao/wordDao.js');

function insertWordsWithFile(req, res, next) {
    console.log(req.body);
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
    insertWord: insertWord,
    insertWordsWithFile:insertWordsWithFile,
    headWord: headWord
};
