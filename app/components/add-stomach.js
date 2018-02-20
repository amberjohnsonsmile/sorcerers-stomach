import Component from '@ember/component';

export default Component.extend({
  submit(event) {
    event.preventDefault();
    fetch('https://immense-ridge-96107.herokuapp.com/quotes', {
      method: 'POST',
      body: JSON.stringify({
        quote: event.target.quote.value,
        source: event.target.name.value,
        image: 'https://source.unsplash.com/random',
        isReal: false
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .catch(console.error);
    this.$('.submitted').removeClass('hidden');
    this.$('#quote')[0].value = '';
    this.$('#name')[0].value = '';
  }
});
