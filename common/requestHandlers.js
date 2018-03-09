const constants = require('./constants.js');

function logRequestHandler(res, logs) {
    res.writeHead(200, constants.contentTypeText);
    res.write(`Logs for ${constants.location}`);
    res.write(logs);
    res.end();
}

function errorRequestHandler(res, err) {
    res.writeHead(500, constants.contentTypeText);
    res.write(`Errors for ${constants.location}`);
    res.write(err);
    res.end();
}

module.exports = {
    logRequestHandler: logRequestHandler,
    errorRequestHandler: errorRequestHandler,
}