const express = require('express');
const { logger, authorize } = require('./../utils')

const server = express();

server.use('/login', [authorize, logger]);

server.get('/login', (req, res) => {
    res.send('Logged In Success');
})

server.get('/home', logger, (req, res) => {
    res.send('Homepage');
})

server.listen(5500, () => {
    console.log('SERVER UP IN PORT 5500');
})

