exports.up = function(knex, Promise) {
  return knex.schema.createTable('quote', table => {
    table.increments('id').primary();
    table.text('quote');
    table.text('source');
    table.text('image');
    table.boolean('isReal');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quote');
};
