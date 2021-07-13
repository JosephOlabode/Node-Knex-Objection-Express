const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/',  async (req, res) => {

    const users = await User.query().findById(2);
    res.json(users);
});

//Export to api.js
module.exports = router;