// Include the knex package and config file
const Knex = require("knex");
const knexFile = require("./knexfile.js");

// Make the connection to the database
const knex = Knex(knexFile.development);

// Run queries
knex("todos")
    .where("user_id",  1)
    .then(rows => {
        for(row of rows) {
            console.log(row);
        }
    })
    .catch(err => {
        console.log(err);
        throw err;
    })