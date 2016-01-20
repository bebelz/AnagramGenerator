/* Server */
var restify = require('restify');
var server = restify.createServer(null);
server.use(restify.bodyParser());

/* Import */
var db = require('./data/db.js');
var wordDao = require('./dao/wordDao.js');
var wordCallbacks  = require('./rest/wordCallbacks.js');

/* REST */
server.post('/dico/:word', wordCallbacks.insertWord);
server.head('/dico/:word', wordCallbacks.headWord);
server.get('/anag/:word', wordCallbacks.getAnagram);


/* START */
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});