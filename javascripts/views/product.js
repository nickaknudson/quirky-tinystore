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
      console.log('make_feature3');
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
      console.log('make_normal');
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
