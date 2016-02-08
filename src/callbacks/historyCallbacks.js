'use strict';

/* Import */
const historyDao = require('../dao/historyDao.js');

function initTable(cb) {
    historyDao.initTable(cb);
}

module.exports = {
    initTable: initTable
};
