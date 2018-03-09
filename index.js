const http = require('http');
const command = 'git log --pretty=format:"%ce;%s;%ad" --date=short';
const location = 'D:\\development\\cobuilder-gobim';
const newLineDevider = '\r\n';

let spawn = require('child_process').spawn,
    child;

http.createServer((req, res) => {
    printLogPromise
        .then((logs) => {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.write(`Logs for ${location}`);
            res.write(logs);
            res.end();
        })
        .catch((err) => {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            rres.write(`Errors for ${location}`);
            res.write(err);
            res.end();
        });
}).listen(2205);

var printLogPromise = new Promise((resolve, reject) => {
    var allLogs = '',
        allErrors = '';
    child = spawn('powershell.exe', [`cd ${location}; ${command}`]);
    child.stdout.on('data', data => {
        allLogs += `Logs Data: ${data} ${newLineDevider}`;
    });

    child.stderr.on('data', data => {
        allErrors += `Logs Errors: ${data} ${newLineDevider}`;
    });

    child.on('exit', () => {
        resolve(allLogs);
        reject(allErrors);
    });    
});

/*
function printLog() {
    child = spawn('powershell.exe', [`cd ${location}; ${command}`]);
    child.stdout.on('data', data => {
        return `Powershell Data: ${data}`;
    });
    child.stderr.on('data', data => {
        return `Powershell Errors: ${data}`;
    });
    child.on('exit', () => {
        return 'Powershell Script finished';
    });
    return child.stdin.end();
}
*/