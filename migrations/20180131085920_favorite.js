exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite', table => {
    table.increments('id').primary();
    table.integer('quote_id');
    table.text('name');
    table.text('location');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorite');
};
