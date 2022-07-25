const express = require('express');

const server = express();

const details = [{ name: 'gokul', age: 26, native: 'Perundurai' }, { name: 'gayathri', age: 26, native: 'Tuticorin' }];

server.get('/home', (request, response) => {
    console.log(request.query)
    const { name } = request.query;
    if (name) {
        const sortDetails = details.filter((detail) => {
            return detail.name == name;
        })
        response.json(sortDetails);
    }
    else
        response.json(details)
})


server.listen(5500, () => {
    console.log('SERVER RUNNING IN 5500');
})