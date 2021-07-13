const express = require('express');
const { NotFoundError } = require('objection');
const router = express.Router();
const User = require('../../models/User');

router.get('/',  async (req, res, next) => {
    try {
        const users = await User.query();
        if(users.length === 0) {
            throw new NotFoundError(users);
        }
        res.json(users);
    } catch(err) {
        next(err);
    }
});

// create new user using a POST request
router.post("/", async (req, res, next) => {
    const {name, age} = req.body; // destruture name and age out of the sent json
    try {

        const user = await User.query().insert({name, age});
        res.json(user);

    } catch(err) {
        next(err);
    }
})

//Export to api.js
module.exports = router;