const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

// Create endpoint of all todos
router.get('/', async  (req, res) => {
    // const todos = await Todo.query()
    // const todos = await Todo.query().select("todo", "done");
    // const todos = await Todo.query().where("todo", "Buy Milk");
    const todos = await Todo.query().withGraphFetched("user");
    
    if(!todos.length === 0) {
        return res.status(404).json({message: "No todo found"});
    }
    res.json(todos);
});

// Exporting to api file
module.exports = router;