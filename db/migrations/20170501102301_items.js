exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("product", function(table) {

    table.increments('id').primary();  // adds an auto incrementing PK column
    table.string('manufacture').notNullable();
    table.string('product_description').notNullable();
    table.decimal('retail_cost', 14, 2).notNullable();
    table.integer('on_hand').notNullable();

    // table.string('manufacture');
    // table.string('product_description');
    // table.decimal('retail_cost', 14, 2);
    // table.integer('on_hand');

    table.timestamps(true, true);  // adds created_at and updated_at
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("product");
};
