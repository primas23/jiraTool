const constants = require('../common/constants');
const config = require('../common/config');

function successRequest(res, responseBody) {
    res.writeHead(constants.successStatus, constants.contentTypeText);
    
    res.write(responseBody);
    res.end();
}

function errorRequest(res, err) {
    res.writeHead(constants.serverErrorStatus, constants.contentTypeText);
    res.write(`Errors for ${constants.location}`);
    res.write(err);
    res.end();
}

module.exports = {
    success: successRequest,
    error: errorRequest
};