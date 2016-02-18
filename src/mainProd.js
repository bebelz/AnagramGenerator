'use strict';

/* Import */
const db = require('./data/db.js');
const async = require('async');
const wordService  = require('./services/wordService.js');
const anagService  = require('./services/anagService.js');
const historyService = require('./services/historyService.js');

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
server.get('/anag/:word', anagService.getAnagram);

/* START */
var initTasks = [];
initTasks.push(wordService.initTable);
initTasks.push(historyService.initTable);

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
