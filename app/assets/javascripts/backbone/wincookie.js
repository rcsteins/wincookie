//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.Wincookie = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},
}

$(function(){
   _.each(Wincookie.Routers, function(router){
       new router();
   });
   Backbone.history.start({pushState:true});
});