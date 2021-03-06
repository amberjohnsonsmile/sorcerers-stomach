import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return fetch('https://immense-ridge-96107.herokuapp.com/comments/' + params.id)
    .then(response => response.json())
    .catch(console.error);
  }
});
