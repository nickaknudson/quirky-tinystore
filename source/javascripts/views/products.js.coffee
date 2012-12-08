#= require views/product

Views.Products = Backbone.Marionette.CompositeView.extend(
  template: 'products'
  tagName: 'div'
  itemView: Views.Product
  itemViewContainer: '.list_content'

  events:
    'click .scroll_left'  : 'scroll_left'
    'click .scroll_right' : 'scroll_right'

  onShow: ()->
    @$('.scroll_left').hide()

  scroll_left: ()->
    @$('.list_content').animate({ "marginLeft": "+=200px" }, "fast");
    @$('.scroll_left').hide() if @$('.list_content').css("marginLeft") <= "1px"
    @$('.scroll_right').show()

  scroll_right: ()->
    @$('.list_content').animate({ "marginLeft": "-=200px" }, "fast");
    @$('.scroll_left').show()
    @$('.scroll_right').hide() if @$('.list_content').css("width") + @$('.list_content').css("marginLeft") >= '799px'
)