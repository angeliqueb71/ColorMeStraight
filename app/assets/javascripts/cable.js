// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);



// ActionCable = require('actioncable')
//
// var cable = ActionCable.createConsumer('wss://RAILS-API-PATH.com/cable')
//
// cable.subscriptions.create('AppearanceChannel', {
//   // normal channel code goes here...
// });
//
