/* Import */
var anagDao = require('../dao/anagDao');

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
            res.send(200, toReturn);

        } else {
            res.send(404);
        }
    });
}

module.exports = {
    getAnagram: getAnagram
};
