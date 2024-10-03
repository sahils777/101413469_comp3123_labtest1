// File: remove.js

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
  console.log('Deleting log files...');
  fs.readdirSync(logsDir).forEach((file) => {
    const filePath = path.join(logsDir, file);
    fs.unlinkSync(filePath);
    console.log(`delete files...${file}`);
  });

  console.log('Removing Logs directory...');
  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist.');
}