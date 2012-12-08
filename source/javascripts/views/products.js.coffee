#= require views/product

Views.Products = Backbone.Marionette.CompositeView.extend(
  template: 'products'
  tagName: 'div'
  itemView: Views.Product
  itemViewContainer: '.list_content'

  events:
    'click .scroll_left'  : 'scroll_left'
    'click .scroll_right' : 'scroll_right'

  triggers: {
    "featured .list_content_hold" : "item:show:featured"
    "normal .list_content_hold"   : "item:show:normal"
  }

  onShow: ()->
    @$('.scroll_left').hide()
    @on('item:show:featured', @show_featured)
    @on('item:show:normal', @show_normal)

  show_featured: ()->
    console.log('featured')
    @marginLeft = @$('.list_content').css("marginLeft")
    @$('.list_content').animate({ "marginLeft": "0px" })
    @$('.list_content_hold').animate({height: '300px'})
    @$('.scroll_left').hide()
    @$('.scroll_right').hide()

  show_normal: ()->
    console.log('normal')
    @$('.list_content').animate({ "marginLeft": @marginLeft })
    @$('.list_content_hold').animate({height: '133px'}, ()=>
      @$('.scroll_left').show()
      @$('.scroll_right').show()
      @$('.scroll_left').hide() if @$('.list_content').css("marginLeft") == "0px"
      console.log @collection.length*200 +"px", @$('.list_content').css("width")
      @$('.scroll_right').hide() if parseInt(@$('.list_content').css("width")) >= @collection.length*200
    )

  scroll_left: ()->
    @$('.list_content').animate({ "marginLeft": "+=200px" }, "fast", ()=>
      @$('.scroll_left').hide() if @$('.list_content').css("marginLeft") == "0px"
      @$('.scroll_right').show()
    )

  scroll_right: ()->
    console.log @collection.length*200 +"px"
    @$('.list_content').animate({ "marginLeft": "-=200px" }, "fast", ()=>
      @$('.scroll_left').show()
      @$('.scroll_right').hide() if parseInt(@$('.list_content').css("width")) >= @collection.length*200
    )
)