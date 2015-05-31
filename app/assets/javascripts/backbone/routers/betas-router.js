Wincookie.Routers.BetasRouter = Backbone.Router.extend({
    routes : {
        "betas(/)" : 'index'
    },
    
    index: function() {
        console.log('working');
    }
    
});