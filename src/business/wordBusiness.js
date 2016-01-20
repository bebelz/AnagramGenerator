/* Import */
var wordDao = require('../dao/wordDao.js');
var wait = require('wait.for');

const MIN_LENGTH = 3;

function getAnagram(word, finished) {
    const wordLgth = word.length;
    var toReturn;

    if(wordLgth <= MIN_LENGTH) {
        finished();
    }

    // FOR
    wordDao.existsWordStartingWith(word, function(bool) {
            if (bool) {
                toReturn = word;
                console.log("FOUND");
            }
        }
    );

    setTimeout(function() {
        finished(toReturn);
    }, 1000);
}

module.exports = {
    getAnagram: getAnagram
};