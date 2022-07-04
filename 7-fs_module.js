const fs = require('fs');

console.log(fs.readFileSync('./contents/strings/texts.txt', 'utf8'));

fs.writeFileSync('./contents/strings/texts.txt', 'Hello gokul', {
    flag: 'a',
});
