#= require_tree ./lib
#= require hamlcoffee
#= require models
#= require collections
#= require templates
#= require views
#= require router

$(document).ready ()->
  window.app = new Backbone.Marionette.Application()
  app.iphone_cases = new Collections.Products({},{list: 'iphone_cases'})
  app.electronics = new Collections.Products({},{list: 'electronics'})

  # Application Regions
  app.addRegions(
    nav: '#nav'
    content: '#widget_content'
  )

  # Router
  app.router = new Router(app)

  Backbone.history.start()