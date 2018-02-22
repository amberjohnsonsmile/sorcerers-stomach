import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return fetch('https://immense-ridge-96107.herokuapp.com/comments')
      .then(response => response.json())
      .catch(console.error);
  }
});
