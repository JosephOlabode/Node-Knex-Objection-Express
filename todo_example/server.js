const express = require("express");
const app = express();

const apiRoutes = require("./routes/api");

// implementing the connection with the development db
const Knex = require('knex');
const knexFile = require('./knefile.js');
const knex = Knex(knexFile.development);


const {Model} = require('objection');

Model.knex(knex);

app.use("/api", apiRoutes);


// Start the server
const server = app.listen(8080, error => {
    if(error) {
        console.log("Error running Express");
    }

    console.log("Server is running on port", server.address().port);
})