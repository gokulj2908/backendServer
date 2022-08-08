const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.send(`Provide valid name`)
    }
    else
        res.send(`Hello ${name}`);
})


module.exports = router;