import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      quotes: fetch('https://immense-ridge-96107.herokuapp.com/quotes/' + params.id)
        .then(response => response.json())
        .catch(console.error),
      comments: fetch('https://immense-ridge-96107.herokuapp.com/quote-comments/' + params.id)
        .then(response => response.json())
        .catch(console.error)
    });
  }
});
