import Component from '@ember/component';

export default Component.extend({
  click(event) {
    event.preventDefault();
    // if (event.target.textContent == 'DELETE') {
    //   let commentId = this.$(event.target).attr('class');
    //   fetch('https://immense-ridge-96107.herokuapp.com/comments/' + commentId, {
    //     method: 'DELETE',
    //     headers: new Headers({
    //       'Content-Type': 'application/json'
    //     })
    //   })
    //     .catch(console.error);
    //   // if there is only one <li>, delete the whole <ul>
    //   this.$(event.target).closest('li').addClass('hidden');
    //   // else delete only the <li>
    // }
    console.log($('li').length);
    if ($('li').length == 1 || $('li').length == 2) {
    
    }
  }
});
