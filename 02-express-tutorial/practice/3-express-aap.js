const { response } = require('express');
const express = require('express')
const path = require('path');

const server = express();

const homePage = path.resolve(__dirname, './homepage.html');


server.get('/', (request, response) => {
    response.sendFile(homePage);
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
