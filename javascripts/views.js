(function() {

  window.Views = new Object();

}).call(this);
(function() {

  Views.Product = Backbone.Marionette.ItemView.extend({
    template: 'product',
    tagName: 'div',
    events: {
      'mouseenter .pic_normal': 'show_info_normal',
      'mouseleave .pic_normal': 'hide_info_normal',
      'click .pic_item_normal': 'make_feature',
      'mouseenter .pic_featured': 'show_info_featured',
      'mouseleave .pic_featured': 'hide_info_featured',
      'click .pic_item_featured': 'make_normal',
      'click .purchase_addtocart': 'addToCart'
    },
    modelBindings: {
      name: {
        selector: '[name=name]'
      },
      tagline: {
        selector: '[name=tagline]'
      },
      description: {
        selector: '[name=summary]',
        converter: function(direction, value) {
          if (value != null) {
            return value.summary;
          }
        }
      },
      price: {
        selector: '[name=price]',
        converter: function(direction, value) {
          if (value != null) {
            return value.formatted;
          }
        }
      },
      influencerCount: {
        selector: '[name=influencerCount]'
      },
      inventor: [
        {
          selector: '[name=inventor_pic]',
          elAttribute: 'src',
          converter: function(direction, value) {
            if (value != null) {
              return value.images.icon;
            }
          }
        }, {
          selector: '[name=inventor_name]',
          converter: function(direction, value) {
            if (value != null) {
              return value.name;
            }
          }
        }
      ],
      images: [
        {
          selector: '[name=image_large]',
          elAttribute: 'src',
          converter: function(direction, value) {
            if (value != null) {
              return value.five25;
            }
          }
        }
      ]
    },
    initialize: function() {
      this.$el.addClass('left');
      return this.modelBinder = new Backbone.ModelBinder();
    },
    onShow: function() {
      this.model.fetch();
      return this.modelBinder.bind(this.model, this.el, this.modelBindings);
    },
    show_info_normal: function() {
      return this.$('.pic_footer_tagline').animate({
        height: 'show'
      });
    },
    hide_info_normal: function() {
      return this.$('.pic_footer_tagline').animate({
        height: 'hide'
      });
    },
    make_feature: function() {
      var _this = this;
      return this.$el.siblings().animate({
        width: 'hide'
      }, function() {
        return _this.$('.pic_footer_tagline').animate({
          height: 'show'
        }, function() {
          _this.$el.parent().parent().trigger('featured');
          _this.$('.pic_item').switchClass('pic_item_normal', 'pic_item_featured');
          _this.$('.pic').switchClass('pic_normal', 'pic_featured');
          return _this.$('.pic_footer').switchClass('pic_footer_normal', 'pic_footer_featured', function() {
            _this.$('.pic_footer_summary').animate({
              height: 'show'
            });
            return _this.$('.product_info').animate({
              width: 'show'
            });
          });
        });
      });
    },
    show_info_featured: function() {
      return this.$('.pic_footer_summary').animate({
        height: 'show'
      });
    },
    hide_info_featured: function() {
      return this.$('.pic_footer_summary').animate({
        height: 'hide'
      });
    },
    make_normal: function() {
      var _this = this;
      this.$('.product_info').animate({
        width: 'hide'
      });
      return this.$('.pic_footer_summary').animate({
        height: 'hide'
      }, function() {
        _this.$('.pic_item').switchClass('pic_item_featured', 'pic_item_normal');
        _this.$('.pic').switchClass('pic_featured', 'pic_normal');
        _this.$el.parent().parent().trigger('normal');
        return _this.$('.pic_footer').switchClass('pic_footer_featured', 'pic_footer_normal', function() {
          _this.$('.pic_footer_tagline').animate({
            height: 'hide'
          });
          return _this.$el.siblings().each(function(index) {
            return $(this).animate({
              width: 'show'
            });
          });
        });
      });
    },
    addToCart: function(e) {
      e.preventDefault();
      return false;
    }
  });

}).call(this);
(function() {

  Views.Products = Backbone.Marionette.CompositeView.extend({
    template: 'products',
    tagName: 'div',
    itemView: Views.Product,
    itemViewContainer: '.list_content',
    events: {
      'click .scroll_left': 'scroll_left',
      'click .scroll_right': 'scroll_right',
      'featured .list_content_hold': 'show_featured',
      'normal .list_content_hold': 'show_normal'
    },
    onRender: function() {
      this.$('.scroll_right').show();
      if (this.$('.list_content').css("marginLeft") === "0px") {
        this.$('.scroll_left').hide();
      }
      if (parseInt(this.$('.list_content').css("width")) >= this.collection.length * 200) {
        return this.$('.scroll_right').hide();
      }
    },
    show_featured: function() {
      this.marginLeft = this.$('.list_content').css("marginLeft");
      this.$('.list_content').animate({
        "marginLeft": "0px"
      });
      this.$('.list_content_hold').animate({
        height: '300px'
      });
      this.$('.scroll_left').hide();
      return this.$('.scroll_right').hide();
    },
    show_normal: function() {
      var _this = this;
      this.$('.list_content').animate({
        "marginLeft": this.marginLeft
      });
      return this.$('.list_content_hold').animate({
        height: '133px'
      }, function() {
        _this.$('.scroll_left').show();
        _this.$('.scroll_right').show();
        if (_this.$('.list_content').css("marginLeft") === "0px") {
          _this.$('.scroll_left').hide();
        }
        if (parseInt(_this.$('.list_content').css("width")) >= _this.collection.length * 200) {
          return _this.$('.scroll_right').hide();
        }
      });
    },
    scroll_left: function() {
      var _this = this;
      return this.$('.list_content').animate({
        "marginLeft": "+=200px"
      }, "fast", function() {
        if (_this.$('.list_content').css("marginLeft") === "0px") {
          _this.$('.scroll_left').hide();
        }
        return _this.$('.scroll_right').show();
      });
    },
    scroll_right: function() {
      var _this = this;
      return this.$('.list_content').animate({
        "marginLeft": "-=200px"
      }, "fast", function() {
        _this.$('.scroll_left').show();
        if (parseInt(_this.$('.list_content').css("width")) >= _this.collection.length * 200) {
          return _this.$('.scroll_right').hide();
        }
      });
    }
  });

}).call(this);
