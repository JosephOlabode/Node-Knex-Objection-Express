// Include the knex package and config file
const Knex = require("knex");
const knexFile = require("./knexfile.js");

// Make the connection to the database
const knex = Knex(knexFile.development);

// Import Objection.js Model class
const {Model} = require("objection");

// Bind all models to the knex instance
Model.knex(knex);

// Create the User model class
class User extends Model {
    static get tableName() {
        return "users";
    }
}

// Run the query in async/await
const getUsers = async () => {
    // returns all users
    const users = await User.query();
    console.log(users);
}
// // Run queries with just pure knex query builder
// knex("todos")
//     .where("user_id",  1)
//     .then(rows => {
//         for(row of rows) {
//             console.log(row);
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         throw err;
//     })