const { createServer } = require('http');

const server = createServer((request, response) => {
    console.log('THE GAINT REQUEST OBJECT IS ----->>>>', request);
    response.write('HERE IS OUR SERVER RUNNING IN PORT 5500');
    response.end();
});

server.listen(5500);
