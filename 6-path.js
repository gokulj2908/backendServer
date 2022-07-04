const path = require('path');

console.log(path.sep);

const fileName = path.join('/contents', 'strings', 'texts.txt');

console.log(fileName);

console.log(`THE TEXT IN FILE NAME GIVEN ----> ${path.basename(fileName)}`);