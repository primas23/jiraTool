const http = require('http');

let logReader = require('./utils/logsReader.js');
const constants = require('./common/constants.js');
let requestHandlers = require('./common/requestHandlers.js');

http.createServer((req, res) => {
    logReader
        .then((logs) => {
            requestHandlers.logRequestHandler(res, logs);
        })
        .catch((err) => {
            requestHandlers.errorRequestHandler(res, err);
        });
}).listen(constants.port);