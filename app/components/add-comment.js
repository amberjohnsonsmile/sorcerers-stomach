import Component from '@ember/component';

export default Component.extend({
  submit(event) {
    event.preventDefault();
    let quoteId = $('q').attr('class');
    fetch('https://immense-ridge-96107.herokuapp.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        quote_id: quoteId,
        comment: event.target.comment.value,
        name: event.target.name.value
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .catch(console.error);
    this.$('.submitted').removeClass('hidden');
    this.$('#comment')[0].value = '';
    this.$('#name')[0].value = '';
  }
});
