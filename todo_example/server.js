const express = require("express");
const app = express();

const apiRoutes = require("./routes/api");

// implementing the connection with the development db
const Knex = require('knex');
const knexFile = require('./knexfile.js');
const knex = Knex(knexFile.development);

// Import Objection.js Model class
const {Model} = require('objection');

// Bind all models to the knex instance
Model.knex(knex);

app.use("/api", apiRoutes);


// Start the server
const server = app.listen(8080, error => {
    if(error) {
        console.log("Error running Express");
    }

    console.log("Server is running on port", server.address().port);
})