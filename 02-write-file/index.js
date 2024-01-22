const fs = require('fs');
const path = require('path');
const readline = require('readline');

const file = fs.createWriteStream(path.join(__dirname, 'notes.txt'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Please, type anything at your discretion');

rl.on('line', (answer) => {
  if (answer === 'exit') {
    exit();
    return;
  }
  file.write(answer);
}).on('SIGINT', exit);

function exit() {
  console.log('Thank you.Bye!');
  rl.close();
}
