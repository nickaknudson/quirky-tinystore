(function() {

  Backbone.Marionette.Renderer.render = function(template, data) {
    if (!JST[template]) {
      throw "Template '" + template + "' not found!";
    }
    return JST[template](data);
  };

}).call(this);
(function() {
  var _ref;

  if ((_ref = window.JST) == null) {
    window.JST = {};
  }

  window.JST['product'] = function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='pic_item pic_item_normal'>\n  <div class='left pic pic_normal'>\n    <img class='pic_img' name='image_large' src='images/ajax-loader.gif'>\n    <div class='pic_footer pic_footer_normal'>\n      <div class='pic_footer_info'>\n        <div class='pic_footer_name' name='name'></div>\n        <div class='pic_footer_price' name='price'></div>\n      </div>\n      <div class='pic_footer_tagline' name='tagline'></div>\n      <div class='pic_footer_summary' name='summary'></div>\n    </div>\n  </div>\n  <div class='left product_info'>\n    <div class='product_purchase'>\n      <div class='purchase_name' name='name'></div>\n      <div class='purchase_tagline' name='tagline'></div>\n      <div class='purchase_price' name='price'></div>\n      <div class='purchase_divide'></div>\n      <a class='purchase_addtocart'>\n        Add to Cart\n      </a>\n    </div>\n    <div class='product_influence'>\n      <div class='product_influence_title'>\n        Influence & Stats\n      </div>\n      <div class='product_invent'>\n        <div class='product_invent_pic'>\n          <img name='inventor_pic' src='images/ajax-loader.gif'>\n        </div>\n        <div class='product_invent_name' name='inventor_name'></div>\n      </div>\n      <div class='product_influence_count'>\n        <div class='product_influence_count_title'>\n          Number of Influencers:\n        </div>\n        <div class='product_influence_count_number' name='influencerCount'></div>\n      </div>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '');
    }).call(window.HAML.context(context));
  };

}).call(this);
(function() {
  var _ref;

  if ((_ref = window.JST) == null) {
    window.JST = {};
  }

  window.JST['products'] = function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<div class='scroll_content'>\n  <div class='scroll_left_hold'>\n    <div class='scroll_left'>\n      <div class='scroll_icon'>\n        <i class='icon-chevron-left'></i>\n      </div>\n    </div>\n  </div>\n  <div class='left list_content_hold'>\n    <div class='list_content'></div>\n  </div>\n  <div class='scroll_right_hold'>\n    <div class='scroll_right'>\n      <div class='scroll_icon'>\n        <i class='icon-chevron-right'></i>\n      </div>\n    </div>\n  </div>\n</div>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '');
    }).call(window.HAML.context(context));
  };

}).call(this);
