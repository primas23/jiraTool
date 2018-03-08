const http = require('http');
const command = 'git log --pretty=format:"%ce;%s;%ad" --date=short';
const location = 'D:\\development\\FileCacheService';

let spawn = require('child_process').spawn,
    child;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.write(printLog() + '');
    res.end('Hello World!');
}).listen(2205);

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