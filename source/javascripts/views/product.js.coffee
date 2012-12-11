Views.Product = Backbone.Marionette.ItemView.extend(
  template: 'product'
  tagName: 'div'

  events:
    'mouseenter .pic_normal'  : 'show_info_normal'
    'mouseleave .pic_normal'  : 'hide_info_normal'
    'click .pic_item_normal'  : 'make_feature'
    'mouseenter .pic_featured': 'show_info_featured'
    'mouseleave .pic_featured': 'hide_info_featured'
    'click .pic_item_featured': 'make_normal'
    'click .purchase_addtocart': 'addToCart'

  modelBindings:
    name:
      selector: '[name=name]'
    tagline:
      selector: '[name=tagline]'
    description:
      selector: '[name=summary]'
      converter: (direction, value)->
        return value.summary if value?
    price:
      selector: '[name=price]'
      converter: (direction, value)->
        return value.formatted if value?
    influencerCount:
      selector: '[name=influencerCount]'
    inventor: [
      {
      selector: '[name=inventor_pic]'
      elAttribute: 'src'
      converter: (direction, value)->
        return value.images.icon if value?
      },
      {
      selector: '[name=inventor_name]'
      converter: (direction, value)->
        return value.name if value?
      }
    ]
    images: [
      # {
      #  selector: '[name=image_small]'
      #  elAttribute: 'src'
      #  converter: (direction, value)->
      #    return value.small if value?
      #},
      {
        selector: '[name=image_large]'
        elAttribute: 'src'
        converter: (direction, value)->
          return value.five25 if value?
      }
    ]

  initialize: ()->
    @$el.addClass('left')
    @modelBinder = new Backbone.ModelBinder()

  onShow: ()->
    @model.fetch()
    @modelBinder.bind(@model, @el, @modelBindings)

  show_info_normal: ()->
    @$('.pic_footer_tagline').animate(
      height: 'show'
    )

  hide_info_normal: ()->
    @$('.pic_footer_tagline').animate(
      height: 'hide'
    )

  make_feature: ()->
    console.log('make_feature3')
    @$el.siblings().animate({width: 'hide'}, ()=>
      @$('.pic_footer_tagline').animate({height: 'show'}, ()=>
        @$el.parent().parent().trigger('featured')
        @$('.pic_item').switchClass('pic_item_normal', 'pic_item_featured')
        @$('.pic').switchClass('pic_normal', 'pic_featured')
        @$('.pic_footer').switchClass('pic_footer_normal', 'pic_footer_featured', ()=>
          @$('.pic_footer_summary').animate(
            height: 'show'
          )
          @$('.product_info').animate(
            width: 'show'
          )
        )
      )
    )

  show_info_featured: ()->
    @$('.pic_footer_summary').animate(
      height: 'show'
    )

  hide_info_featured: ()->
    @$('.pic_footer_summary').animate(
      height: 'hide'
    )

  make_normal: ()->
    console.log('make_normal')
    @$('.product_info').animate(
      width: 'hide'
    )
    @$('.pic_footer_summary').animate({height: 'hide'}, ()=>
      @$('.pic_item').switchClass('pic_item_featured', 'pic_item_normal')
      @$('.pic').switchClass('pic_featured', 'pic_normal')
      @$el.parent().parent().trigger('normal')
      @$('.pic_footer').switchClass('pic_footer_featured', 'pic_footer_normal', ()=>
        @$('.pic_footer_tagline').animate(
          height: 'hide'
        )
        @$el.siblings().each((index)->
          $(this).animate(
            width: 'show'
          )
        )
      )
    )

  addToCart: (e)->
    e.preventDefault()
    return false

)