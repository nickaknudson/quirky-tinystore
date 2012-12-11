(function() {

  window.Models = new Object();

}).call(this);
(function() {

  Models.Product = Backbone.RelationalModel.extend({
    urlRoot: "products",
    parse: function(res) {
      return res.product;
    }
  });

}).call(this);
