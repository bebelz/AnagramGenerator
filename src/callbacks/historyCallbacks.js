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

module.exports = {
    initTable: initTable,
    insertHistoryOk: insertHistoryOk,
    insertHistoryKo: insertHistoryKo
};
