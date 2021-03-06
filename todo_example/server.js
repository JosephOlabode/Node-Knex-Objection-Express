const express = require("express");
const app = express();

// Accept JSON data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

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

// Include error handlers - must be the last one among other middleware or routes to function properly
const {errorHandler} = require('./helpers/error.js');
app.use((err, req, res, next) => {
    errorHandler(err, res);
})

// Start the server
const server = app.listen(8080, error => {
    if(error) {
        console.log("Error running Express");
    }

    console.log("Server is running on port", server.address().port);
})