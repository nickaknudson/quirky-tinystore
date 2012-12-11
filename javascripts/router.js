(function() {

  window.Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'iphone_cases': 'iphone_cases',
      'electronics': 'electronics',
      'kitchen': 'kitchen',
      'organization': 'organization',
      'gadgets': 'gadgets',
      'housewares': 'housewares'
    },
    home: function() {
      var view;
      view = new Views.Products({
        collection: app.iphone_cases
      });
      app.content.show(view);
      return app.iphone_cases.fetch();
    },
    iphone_cases: function() {
      var view;
      view = new Views.Products({
        collection: app.iphone_cases
      });
      app.content.show(view);
      return app.iphone_cases.fetch();
    },
    electronics: function() {
      var view;
      view = new Views.Products({
        collection: app.electronics
      });
      app.content.show(view);
      return app.electronics.fetch();
    },
    kitchen: function() {
      var view;
      view = new Views.Products({
        collection: app.kitchen
      });
      app.content.show(view);
      return app.kitchen.fetch();
    },
    organization: function() {
      var view;
      view = new Views.Products({
        collection: app.organization
      });
      app.content.show(view);
      return app.organization.fetch();
    },
    gadgets: function() {
      var view;
      view = new Views.Products({
        collection: app.gadgets
      });
      app.content.show(view);
      return app.gadgets.fetch();
    },
    housewares: function() {
      var view;
      view = new Views.Products({
        collection: app.housewares
      });
      app.content.show(view);
      return app.housewares.fetch();
    }
  });

}).call(this);
