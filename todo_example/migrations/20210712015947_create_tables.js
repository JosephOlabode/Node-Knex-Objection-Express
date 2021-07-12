
exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
        table.increments("id");
        table.string("name").notNullable();
        table.integer("age");
    })
    .createTable("todos", table => {
        table.increments("id");
        table.string("todo").notNullable();
        table.boolean("done").defaultTo(false);
        table.integer("user_id").unsigned().notNullable();

        // set the foreign key
        table.foreign("user_id")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  
};
