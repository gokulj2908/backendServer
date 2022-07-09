const { readFile } = require('fs');

console.log('Fetching from Contents');

readFile('./contents/strings/texts.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
    }
    if (res) {
        console.log(res);
    }
    console.log('Fetched from Contents');
});

console.log('Waiting for next operation');