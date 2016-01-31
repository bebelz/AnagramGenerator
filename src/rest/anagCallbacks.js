/* Import */
var anagBusiness = require('../business/anagBusiness.js');
var wait = require('wait.for');

function getAnagram(req, res, next) {
    const word = req.params.word;
    console.log('Received : ' + word);

    wait.launchFiber(anagBusiness.getAnagram, word, function (anagrammList) {
            console.log(anagrammList);
            if (typeof anagrammList != 'undefined' && anagrammList.length > 0) {
                res.send(200,anagrammList);
            } else {
                res.send(404);
            }
        }
    );
}

module.exports = {
    getAnagram: getAnagram
};
