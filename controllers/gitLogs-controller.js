let logReader = require('../utils/logsReader');
let responseHelper = require('../utils/responseHelper');
const constants = require('../common/constants');

function getAll(req, res) {
    logReader
        .then((logs) => {
            responseHelper.success(res, logs);
        })
        .catch((err) => {
            responseHelper.error(res, err);
        });
}

module.exports = {
    getAll
};