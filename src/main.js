/* Server */
var restify = require('restify');
var server = restify.createServer(null);
server.use(restify.bodyParser());

/* Import */
var db = require('./data/db.js');
var wordCallbacks  = require('./rest/wordCallbacks.js');
var anagCallbacks  = require('./rest/anagCallbacks.js');

/* REST */
server.post('/dico/:word', wordCallbacks.insertWord);
server.post('/dico/', wordCallbacks.insertWordsWithFile);
server.head('/dico/:word', wordCallbacks.headWord);
server.get('/anag/:word', anagCallbacks.getAnagram);


/* START */
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});