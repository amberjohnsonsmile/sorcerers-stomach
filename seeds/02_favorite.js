exports.seed = function(knex, Promise) {
  return knex('favorite').del()
    .then(() => {
      return knex('favorite').insert([
        {quote_id: 3, name: 'Amber', location: 'Denver, USA'},
        {quote_id: 1, name: 'Fred', location: 'London, UK'},
        {quote_id: 2, name: 'Voldemort', location: 'Tirana, Albania'}
      ]);
    });
};
