const express = require('express');
let gitLogController = require('../controllers/gitLogs-controller');
let router = express.Router();

module.exports = (app) => {
    router
        .get('/', gitLogController.getAll);

    app.use('/gitLogs', router);
};