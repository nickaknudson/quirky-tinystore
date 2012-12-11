(function() {

  Collections.Products = Backbone.Collection.extend({
    model: Models.Product,
    initialize: function(models, options) {
      return this.list = options.list;
    },
    urlRoot: "/products",
    url: function() {
      return "/products/" + this.list;
    },
    parse: function(res) {
      return res.products;
    }
  });

}).call(this);
