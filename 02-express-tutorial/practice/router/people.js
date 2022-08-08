const express = require('express');

const {
    getPeople, updatePeople
} = require('../controller/people')

const router = express.Router();

router.get('/', getPeople)


router.put('/update/:id', updatePeople)

module.exports = router;
