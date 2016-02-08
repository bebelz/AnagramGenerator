'use strict';

/* Import */
const db = require('./data/db.js');
const async = require('async');
const wordCallbacks  = require('./callbacks/wordCallbacks.js');
const anagCallbacks  = require('./callbacks/anagCallbacks.js');
const historyCallbacks = require('./callbacks/historyCallbacks.js');

/* Server */
const restify = require('restify');
const server = restify.createServer(null);
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
var initTasks = [];
initTasks.push(function(callback) {
    wordCallbacks.initTable(callback)
});
initTasks.push(function(callback) {
    historyCallbacks.initTable(callback)
});

async.parallel(initTasks,function (err,data){
    if(!err) {
        console.log('DB Init OK');
        server.listen(8080, function() {
            console.log('%s listening at %s', server.name, server.url);
        });

    } else {
        console.log('Error during DB init : ' + err);
    }
});
