import Component from '@ember/component';

export default Component.extend({
  submit(event) {
    event.preventDefault();
    $('.quote').removeClass('hidden');
    $('html').css('backgroundImage', 'url("https://images.unsplash.com/photo-1516703914899-e8303d01329a")')
  }
});
