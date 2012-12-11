#= require views/product

Views.Products = Backbone.Marionette.CompositeView.extend(
  template: 'products'
  tagName: 'div'
  itemView: Views.Product
  itemViewContainer: '.list_content'

  events:
    'click .scroll_left'  : 'scroll_left'
    'click .scroll_right' : 'scroll_right'
    'featured .list_content_hold' : 'show_featured'
    'normal .list_content_hold'   : 'show_normal'

  onShow: ()->
    @$('.scroll_left').show()
    @$('.scroll_right').show()
    @$('.scroll_left').hide() if @$('.list_content').css("marginLeft") == "0px"
    @$('.scroll_right').hide() if parseInt(@$('.list_content').css("width")) >= @collection.length*200

  show_featured: ()->
    @marginLeft = @$('.list_content').css("marginLeft")
    @$('.list_content').animate({ "marginLeft": "0px" })
    @$('.list_content_hold').animate({height: '300px'})
    @$('.scroll_left').hide()
    @$('.scroll_right').hide()

  show_normal: ()->
    @$('.list_content').animate({ "marginLeft": @marginLeft })
    @$('.list_content_hold').animate({height: '133px'}, ()=>
      @$('.scroll_left').show()
      @$('.scroll_right').show()
      @$('.scroll_left').hide() if @$('.list_content').css("marginLeft") == "0px"
      @$('.scroll_right').hide() if parseInt(@$('.list_content').css("width")) >= @collection.length*200
    )

  scroll_left: ()->
    @$('.list_content').animate({ "marginLeft": "+=200px" }, "fast", ()=>
      @$('.scroll_left').hide() if @$('.list_content').css("marginLeft") == "0px"
      @$('.scroll_right').show()
    )

  scroll_right: ()->
    @$('.list_content').animate({ "marginLeft": "-=200px" }, "fast", ()=>
      @$('.scroll_left').show()
      @$('.scroll_right').hide() if parseInt(@$('.list_content').css("width")) >= @collection.length*200
    )
)