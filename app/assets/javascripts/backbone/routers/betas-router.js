Wincookie.Routers.BetasRouter = Backbone.Router.extend({
    routes : {
        "betas(/)" : 'index'
    },
    
    index: function() {
        console.log('working');
        
        hbsTest = new Wincookie.Views.HbsTest({el: '#hbs-test'});
        hbsTest.render();
    }
    
});