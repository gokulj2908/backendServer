const { createServer } = require('http');

const server = createServer((request, response) => {
    if (request.url === '/') {
        response.end('This is the homepage');
    }
    if (request.url === '/contact') {
        response.end(
            `<h1> Gokul </h1>
            <h4> 9585774674 </h4>`
        );
    }
    else response.end(
        `<a href="/"> back home </a>`
    );

});

server.listen(5500);