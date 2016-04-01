'use strict';

/* Import */
const historyDao = require('../dao/historyDao');

function initTable(cb) {
    historyDao.initTable(cb);
}

function insertHistoryOk(word, cb) {
    historyDao.insertHistory(word, 1, cb);
}

function insertHistoryKo(word, cb) {
    historyDao.insertHistory(word, 0, cb);
}

function getHistory(req, res, next) {
    var offset = parseInt(req.params.offset);
    var limit = parseInt(req.params.limit);

    historyDao.getHistory(offset, limit, function(err, data) {
        if(data != null && data.length > 0 && err == null) {
            var toReturn = {data: []};
            toReturn.data = data;
            res.send(200,toReturn);
        } else {
            console.log(err);
            res.send(500);
        }
    });
}

module.exports = {
    initTable: initTable,
    insertHistoryOk: insertHistoryOk,
    insertHistoryKo: insertHistoryKo,
    getHistory: getHistory
};
