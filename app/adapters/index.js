import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // host: 'https://immense-ridge-96107.herokuapp.com',
  host: 'http://localhost:3000/quotes'
});
