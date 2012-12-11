#= require_tree ./lib
#= require hamlcoffee
#= require models
#= require collections
#= require templates
#= require views
#= require router

$(document).ready ()->
  window.app = new Backbone.Marionette.Application()

  app.iphone_cases = new Collections.Products(null, {list: 'iphone_cases'})
  app.electronics = new Collections.Products(null, {list: 'electronics'})
  app.kitchen = new Collections.Products(null, {list: 'kitchen'})
  app.organization = new Collections.Products(null, {list: 'organization'})
  app.gadgets = new Collections.Products(null, {list: 'gadgets'})

  # Application Regions
  app.addRegions(
    nav: '#nav'
    content: '#widget_content'
  )

  # Router
  app.router = new Router(app)

  Backbone.history.start()