Wincookie.Views.HbsTest = Backbone.View.extend({
    template: HandlebarsTemplates['hbs-test'],
    
    render: function() {
        var html = this.template({});
        this.$el.html(html);
    }
});