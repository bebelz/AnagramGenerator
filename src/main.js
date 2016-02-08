'use strict';

/* Import */
var db = require('./data/db.js');
var wordCallbacks  = require('./callbacks/wordCallbacks.js');
var anagCallbacks  = require('./callbacks/anagCallbacks.js');

/* Server */
var restify = require('restify');
var server = restify.createServer(null);
server.use(restify.bodyParser());
server.use(function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
});

/* Routes */
server.post('/dico/:word', wordCallbacks.insertWord);
server.post('/dico/', wordCallbacks.insertWordsWithFile);
server.head('/dico/:word', wordCallbacks.headWord);
server.get('/anag/:word', anagCallbacks.getAnagram);


/* START */
wordCallbacks.initTable(function(err, data) {
    if(!err) {
        console.log('DB State OK');
        server.listen(8080, function() {
            console.log('%s listening at %s', server.name, server.url);
        });

    } else {
        console.log(err);
    }
});
