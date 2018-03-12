let logReader = require('../utils/logsReader');
let requestHandlers = require('../common/requestHandlers');
const constants = require('../common/constants');
const config = require('../common/config');

function getAll(req, res) {
    logReader
        .then((logs) => {
            res.writeHead(constants.successStatus, constants.contentTypeText);
            res.write(`Logs for ${config.location}`);
            res.write(logs);
            res.end();
        })
        .catch((err) => {
            res.writeHead(constants.serverErrorStatus, constants.contentTypeText);
            res.write(`Errors for ${constants.location}`);
            res.write(err);
            res.end();
        });
}

module.exports = {
    getAll
};