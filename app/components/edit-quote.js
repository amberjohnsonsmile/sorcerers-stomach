import Component from '@ember/component';

export default Component.extend({
  submit(event) {
    event.preventDefault();
    let quoteData = this.$('textarea')[0];
    fetch('https://immense-ridge-96107.herokuapp.com/quotes/' + this.$('textarea')[0].id, {
      method: 'PUT',
      body: JSON.stringify({
        id: quoteData.id,
        quote: quoteData.value
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .catch(console.error);
    quoteData.value = '';
    this.$('.edited').removeClass('hidden');
  }
});
