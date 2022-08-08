const { people } = require('../../data');

const getPeople = (req, res) => {
    res.status(300).json({ data: people, status: 'success' });
};

const updatePeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((per) => per.id === Number(id))
    if (person) {
        res.send({
            id: id,
            name: name
        })
    }
    else {
        res.status(404).send('No matching id found');
    }

};

module.exports = {
    getPeople,
    updatePeople
}