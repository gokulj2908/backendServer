const fileSystem = require('fs');

const writeText = () => {
    fileSystem.writeFileSync('./contents/strings/texts1.txt', 'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.');
}

const readText = (path) => {
    return new Promise((resolve, reject) => {
        fileSystem.readFile(path, 'utf8', (err, res) => {
            err && reject(err);
            res && resolve(res);
        });
    })
}
writeText();
readText('./contents/strings/texts.txt').then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));
readText('./contents/strings/texts1.txt').then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));