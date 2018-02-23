import Component from '@ember/component';

export default Component.extend({
  keyUp(event) {
    this.$('.amount')[0].textContent = event.target.value;
  },
  actions: {
    thanks() {
      this.$('.thanks').removeClass('hidden');
      this.$('.amount').removeClass('hidden');
      this.$('#amount')[0].value = '';
    }
  }
});
