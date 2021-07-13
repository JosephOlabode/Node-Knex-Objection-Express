const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/',  async (req, res) => {

    const users = await User.query();
    res.json(users);
});

// create new user using a POST request
router.post("/", async (req, res) => {
    const {name, age} = req.body; // destruture name and age out of the sent json
    try {

        const user = await User.query().insert({name, age});
        res.json(user);

    } catch(err) {
        res.status(400).json(err.data);
    }
})

//Export to api.js
module.exports = router;