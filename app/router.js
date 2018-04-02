import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('sub-app1', { as: 'sa1' });
  this.mount('sub-app2', { as: 'sa2' });
});

export default Router;
