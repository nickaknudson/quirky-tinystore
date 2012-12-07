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

  # Application Regions
  app.addRegions(
    nav: '#nav'
    content: '#content'
  )

  # Prepare iphone_cases
  app.iphone_cases_view = new Views.Products({collection: app.iphone_cases})
  app.iphone_cases.fetch()

  # Router
  app.router = new Router()

  Backbone.history.start()