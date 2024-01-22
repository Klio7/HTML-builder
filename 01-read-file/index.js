const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'), {
  encoding: 'utf-8',
  highWaterMark: 2,
});
let data = '';
readableStream.on('data', (chunk) => {
  data += chunk;
});
readableStream.on('close', () => {
  console.log(data);
});
