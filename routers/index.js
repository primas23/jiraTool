const express = require('express');
let gitLogController = require('../controllers/gitLogs-controller');
let router = express.Router();

module.exports = (app) => {
    app.route('/')
        .get((req, res) => {
            res.send('primas toolbox api');
        });

    router
        .get('/gitlogs', gitLogController.getAll);

    app.use('/api', router);
};