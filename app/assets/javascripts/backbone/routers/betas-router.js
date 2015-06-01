Wincookie.Routers.BetasRouter = Backbone.Router.extend({
    routes : {
        "betas(/)" : 'index'
    },
    
    index: function() {
        console.log('working');
        
        var hbsTest = new Wincookie.Views.HbsTest();
    }
    
});