import Component from '@ember/component';

export default Component.extend({
  submit(event) {
    event.preventDefault();
    let commentData = this.$('textarea')[0];
    fetch('https://immense-ridge-96107.herokuapp.com/comments/' + commentData.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: commentData.id,
        comment: commentData.value
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .catch(console.error);
    commentData.value = '';
    this.$('.edited').removeClass('hidden');
  }
});
