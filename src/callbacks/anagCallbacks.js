'use strict';

/* Import */
const anagDao = require('../dao/anagDao');
const historyCallbacks = require('../callbacks/historyCallbacks');

function getAnagram(req, res, next) {
    const word = req.params.word;
    console.log('Received : ' + word);

    anagDao.getAnagramm(word, function (err, data) {
        console.log(data);
        var toReturn = {data: []};

        if(data != null && data.length > 0) {
            data.forEach( function(word) {
                toReturn.data.push(word.word);
            });
            historyCallbacks.insertHistoryOk(word);
            res.send(200, toReturn);

        } else {
            if(err == 'empty') {
                // No Anagram found
                historyCallbacks.insertHistoryOk(word);
                res.send(404);
            } else {
                // Error(s) while Anagram's search
                historyCallbacks.insertHistoryKo(word);
                res.send(500);
            }
        }
    });
}

module.exports = {
    getAnagram: getAnagram
};
