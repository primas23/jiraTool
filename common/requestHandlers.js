const constants = require('./constants.js');

function logRequestHandler(res, logs) {
    res.writeHead(constants.successStatus, constants.contentTypeText);
    res.write(`Logs for ${constants.location}`);
    res.write(logs);
    res.end();
}

function errorRequestHandler(res, err) {
    res.writeHead(constants.serverErrorStatus, constants.contentTypeText);
    res.write(`Errors for ${constants.location}`);
    res.write(err);
    res.end();
}

module.exports = {
    logRequestHandler: logRequestHandler,
    errorRequestHandler: errorRequestHandler,
};