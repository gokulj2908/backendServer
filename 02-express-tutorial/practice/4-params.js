const express = require('express');

const server = express();

const details = [{ name: 'Gokul', age: 26, native: 'Perundurai' }, { name: 'Gayathri', age: 26, native: 'Tuticorin' }];

server.get('/home', (request, response) => {
    response.json(details)
})

server.get(`/age/:ageNo`, (request, response) => {
    console.log(request.params);
    const { ageNo } = request.params;  //object destructuring
    const personOfage = details.find((detail) => detail.age == ageNo);
    response.json(personOfage);
})
server.get(`/person/:ageNo`, (request, response) => {
    const { ageNo } = request.params;  //object destructuring
    const personAge = details.filter((detail) => {
        if (detail.age == ageNo)
            return detail
    })
    const name = personAge.map((detail) => {
        if (detail.age == ageNo)
            return detail.name
    })
    if (name.length === 0)
        response.status(404).send('NO DETIALS FOUND');
    response.json(name);
})

server.listen(5500, () => {
    console.log('SERVER RUNNING IN 5500');
})