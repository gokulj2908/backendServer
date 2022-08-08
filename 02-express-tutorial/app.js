const express = require('express');
const app = express();

const peopleRouter = require('./practice/router/people');

const loginRouter = require('./practice/router/auth')

app.use(express.urlencoded({ extended: false }))

app.use(express.static('./methods-public'))

app.use(express.json());

app.use('/people', peopleRouter);

app.use('/login', loginRouter);

app.listen(5500, () => {
    console.log('APP RUNNING IN 5500');
});