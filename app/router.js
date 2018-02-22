import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add');
  this.route('donate');
  this.route('random');
  this.route('favorites');
  this.route('edit');
  this.route('comment', function() {});
  this.route('edit-comment');
});

export default Router;
