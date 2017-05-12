exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("shoppingcart", function(table) {

    table.increments('id').primary();  // adds an auto incrementing PK column
    table.integer('product_id').notNullable();
    table.decimal('retail_cost', 14, 2).notNullable();
    table.timestamps(true, true);  // adds created_at and updated_at
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("shoppingcart");
};
