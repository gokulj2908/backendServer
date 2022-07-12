const { response } = require('express');
const express = require('express')
const { readFileSync } = require('fs');

const server = express();

const homePage = readFileSync('./homepage.html');


server.get('/', (request, response) => {
    response.send(homePage);
});

server.get('/about', (request, response) => {
    response.send('<h4>I am budding backend developer</h4>');
})

server.all('*', (request, response) => {
    response.status(406).send('404 no resource available');
})

server.listen(5500, () => {
    console.log('Server successfully listening on PORT::5500');
});
