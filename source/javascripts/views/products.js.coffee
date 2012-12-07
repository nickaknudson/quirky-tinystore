#= require views/product

Views.Products = Backbone.Marionette.CompositeView.extend(
  template: 'products'
  tagName: 'div'
  itemView: Views.Product
  itemViewContainer: '.list_content'

  onShow: ()->

)