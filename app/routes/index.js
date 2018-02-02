import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return $.getJSON('quotes.json');
    return this.get('store').findAll('quote');
  }
});
