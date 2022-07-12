const { createServer } = require('http');

const { readFileSync } = require('fs');

//read files
const homePage = readFileSync('./homepage.html');

const server = createServer((request, response) => {
    const { url } = request;
    if (url === "/") {
        response.writeHead(200, {
            'content-type': 'text/html'
        })
        response.end(homePage);
    }

    else if (url === '/contact') {
        response.writeHead(200, {
            'content-type': 'text/html'
        })
        response.end('<h1> 9585774674 </h1>');
    }

    else {
        response.writeHead(404, {
            'content-type': 'text/html'
        })
        response.end('<h1> NOT FOUND</h1>');
    }

});

server.listen(5500);