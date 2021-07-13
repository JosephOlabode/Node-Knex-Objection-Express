const express = require('express');
const { NotFoundError } = require('objection');
const router = express.Router();
const User = require('../../models/User');
const {CustomError} = require(__dirname + "/../../helpers/error.js");

router.get('/',  async (req, res, next) => {
    try {
        const users = await User.query()
            .where("name", "Hakuna Matata").throwIfNotFound();
        // if(users.length === 0) {
        //     throw new NotFoundError(users);
        // }
        res.json(users);
    } catch(err) {
        next(err);
    }
});

router.get("/drinks/", async (req, res, next) => {
    const { id } = req.body;
    console.log('I am hit');

    try {
        const user = await User.query().findById(id);
        if(user.age < 20) {
            console.log(user);
            throw new CustomError(403, "The user is not old enough consume alcholic drinks", "NotOldEnoughError");
        }
        res.json(user);
    } catch (err) {
        next(err);
    }
})

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