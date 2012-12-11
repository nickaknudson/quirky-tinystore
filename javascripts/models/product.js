(function() {

  Models.Product = Backbone.RelationalModel.extend({
    urlRoot: "products",
    parse: function(res) {
      return res.product;
    }
  });

}).call(this);
