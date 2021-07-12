const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

// Create endpoint of all todos
router.get('/', (req, res) => {

    const todos = await Todo.query();
    res.json(todos);
    
    // res.json([
    //     {
    //         id: 1,
    //         user_id: 1, // -> Marc
    //         todo: "Buy Milk",
    //         done: 0
    //     },
    //     {
    //         id: 2,
    //         user_id: 1, //-> Marc
    //         todo: "Walk the dog",
    //         done: 0
    //     },
    //     {
    //         id: 3,
    //         user_id: 3, // -> Jessica
    //         todo: "Call grandma",
    //         done: 0
    //     }
    // ]);
});

// Exporting to api file
module.exports = router;