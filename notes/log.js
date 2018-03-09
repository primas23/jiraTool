let spawn = require('child_process').spawn,
  child;

const command = 'git log --pretty=format:"%ce;%s;%ad" --date=short';
const location = 'D:\\development\\cobuilder-gobim';

child = spawn('powershell.exe', [`cd ${location}; ${command}`]);
child.stdout.on('data', data => {
  console.log(`Powershell Data: ${data}`);
});
child.stderr.on('data', data => {
  console.log(`Powershell Errors: ${data}`);
});
child.on('exit', () => {
  console.log('Powershell Script finished');
});
child.stdin.end();