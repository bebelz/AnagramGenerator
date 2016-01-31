/* Import */
var anagDao = require('../dao/anagDao.js');
var wait = require('wait.for');

const MIN_LENGTH = 3;

function getAnagram(word, finished) {
    const wordLgth = word.length;
    var toReturn = [];

    if(wordLgth <= MIN_LENGTH) {
        finished();
    }

    treatWordPart("",word,wordLgth,toReturn);

    finished(toReturn);
}

// PREC : wordPart is OK
function treatWordPart(wordPart, remaingParts, wordLgth,toReturn) {
    var cpt = remaingParts.length;
    for(var i = 0 ; i < cpt ; i++) {

        var newWordPart = wordPart + remaingParts[i];
        if(wait.for(anagDao.existsWordStartingWith, newWordPart, wordLgth)) {
            if(newWordPart.length < wordLgth) {
                console.log('Continue with : ' + newWordPart);
                var newRemainingPart = removeElementFromString(remaingParts,remaingParts[i]);
                treatWordPart(newWordPart,newRemainingPart,wordLgth,toReturn);
            } else {
                toReturn.push(newWordPart);
                console.log(newWordPart);
            }
        } else {
            console.log('Refused : ' + newWordPart);
        }
    }
}

function removeElementFromString(str,elt) {
    var toReturn = "";
    var hasBeenRemoved = false;

    for(var i = 0 ; i < str.length ; i++) {
        if(elt == str[i] && !hasBeenRemoved) {
            hasBeenRemoved = true;
        } else {
            toReturn += str[i];
        }
    }

    return toReturn;
}

module.exports = {
    getAnagram: getAnagram
};