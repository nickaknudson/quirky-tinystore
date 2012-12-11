(function() {

  window.Router = Backbone.Router.extend({
    routes: {
      '': 'home'
    },
    home: function() {
      return app.content.show(app.iphone_cases_view);
    }
  });

}).call(this);
