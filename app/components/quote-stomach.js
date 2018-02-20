import Component from '@ember/component';

export default Component.extend({
  click(event) {
    event.preventDefault();
    if (event.target.id == 'delete') {
      let quoteId = this.$(event.target).closest('.quote').find('q').attr('class');
      fetch('https://immense-ridge-96107.herokuapp.com/quotes/' + quoteId, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .catch(console.error);
      this.$(event.target).closest('.quote').addClass('hidden');
    }
    if (event.target.textContent == 'COMMENT') {
      let quoteId = this.$(event.target).closest('.quote').find('q').attr('class');
      fetch('https://immense-ridge-96107.herokuapp.com/quotes/' + quoteId)
        .then(response => response.json())
        .then(response => {
          $('html').css('backgroundImage', `url(${response.quote.image})`);
        })
        .catch(console.error);
    }
  }
});
