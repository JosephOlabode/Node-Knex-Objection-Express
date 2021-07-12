const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/',  async (req, res) => {

    const users = await User.query();
    res.json(users);
    // res.json([
    //     {
    //         id: 1,
    //         name: 'Marc',
    //         age: 19
    //     },
    //     {
    //         id: 2,
    //         name: 'Ben',
    //         age: 31
    //     },
    //     {
    //         id: 3,
    //         name: 'Jessica',
    //         age: 27
    //     }
    // ]);
});

//Export to api.js
module.exports = router;