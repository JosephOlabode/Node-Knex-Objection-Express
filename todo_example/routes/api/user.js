const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Marc',
            age: 19
        },
        {
            id: 2,
            name: 'Ben',
            age: 31
        },
        {
            id: 3,
            name: 'Jessica',
            age: 27
        }
    ]);
});

//Export to api.js
module.exports = router;