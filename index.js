const http = require('http');
let logReader = require('./utils/logsReader.js');
const constants = require('./common/constants.js');

http.createServer((req, res) => {
    logReader
        .then((logs) => {
            res.writeHead(200, constants.contentTypeText);
            res.write(`Logs for ${constants.location}`);
            res.write(logs);
            res.end();
        })
        .catch((err) => {
            res.writeHead(500, constants.contentTypeText);
            res.write(`Errors for ${constants.location}`);
            res.write(err);
            res.end();
        });
}).listen(constants.port);