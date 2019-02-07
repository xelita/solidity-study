const path = require('path');
const fs = require('fs');

const solc = require('solc');

const sourceFilePath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const sourceFileContent = fs.readFileSync(sourceFilePath, 'utf8');

module.exports = solc.compile(sourceFileContent, 1).contracts[':Inbox'];
