exports.seed = function(knex, Promise) {
  return knex('quote').del()
    .then(() => {
      return knex('quote').insert([
        {quote: 'Harry and Dudley promptly had a furious but silent fight over who would listen at the keyhole; Dudley won, so Harry, his glasses dangling from one ear, lay flat on his stomach to listen at the crack between door and floor', source: "Harry Potter and the Sorcerer's Stone", image: 'harry.jpg', isReal: true},
        {quote: 'He shivered and turned over, trying to get comfortable, his stomach rumbling with hunger.', source: "Harry Potter and the Sorcerer's Stone", image: 'harry.jpg', isReal: true},
        {quote: "Harry's stomach lurched with nerves and Ron, he saw, looked pale under his freckles.", source: "Harry Potter and the Sorcerer's Stone", image: 'harry.jpg', isReal: true}
      ]);
    });
};
