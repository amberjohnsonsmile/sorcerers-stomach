import Component from '@ember/component';

export default Component.extend({
  click(event) {
    event.preventDefault();
    if (event.target.id == 'delete') {
      fetch('https://immense-ridge-96107.herokuapp.com/quotes/13', {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .catch(console.error);
    }
  }
});
