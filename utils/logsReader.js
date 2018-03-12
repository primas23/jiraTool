const constants = require('../common/constants');
const config = require('../common/config');
let spawn = require('child_process').spawn,
    child;

let logReader = new Promise((resolve, reject) => {
    let allLogs = '',
        allErrors = '';
    child = spawn('powershell.exe', [`cd ${config.location}; ${constants.command}`]);
    child.stdout.on('data', data => {
        allLogs += `Logs Data: ${data} ${constants.newLineDevider}`;
    });

    child.stderr.on('data', data => {
        allErrors += `Logs Errors: ${data} ${constants.newLineDevider}`;
    });

    child.on('exit', () => {
        resolve(allLogs);
        reject(allErrors);
    });    
});

module.exports = logReader;