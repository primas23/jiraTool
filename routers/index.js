const express = require('express');
let gitLogController = require('../controllers/gitLogs-controller');
let router = express.Router();

module.exports = (app) => {
    router
        .get('/gitlogs', gitLogController.getAll);

    app.use('/api', router);
};