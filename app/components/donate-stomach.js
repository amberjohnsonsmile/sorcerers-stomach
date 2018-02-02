import Component from '@ember/component';

export default Component.extend({
  keyUp(event) {
    let stripeAmount = event.target.value;
  }
});
