
exports.seed = function(knex) {
  // Deletes ALL data of todos
  return knex('todos').del()
    .then(()=> {
      // Delet all data of users
      return knex("users").del();
    })
    .then(function () {
      // Inserts new data into users
      return knex('users').insert([
        {name: "Marc", age: 19},
        {name: "Ben", age: 31},
        {name: "Jessica", age: 27}
      ]);
    })
    .then(users => {
      // Inserts new data into todos
      return knex("todos").insert([
        {user_id: 1, todo: "Buy Milk"},
        {user_id: 1, todo: "Walk the dog"},
        {user_id: 2, todo: "Call grandma"}
      ])
    });
};
