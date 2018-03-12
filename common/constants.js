module.exports = {
    command: 'git log --pretty=format:"%ce;%s;%ad" --date=short',
    newLineDevider: '\r\n',
    successStatus: 200,
    serverErrorStatus: 500,
    contentTypeText: { 'Content-Type': 'text/plain' }
};