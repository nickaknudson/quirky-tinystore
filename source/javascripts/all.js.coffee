#= require_tree ./lib
#= require hamlcoffee
#= require models
#= require collections
#= require templates
#= require views
#= require router

$(document).ready ()->
  window.app = new Backbone.Marionette.Application()

  # Router
  app.router = new Router(app)

  Backbone.history.start()