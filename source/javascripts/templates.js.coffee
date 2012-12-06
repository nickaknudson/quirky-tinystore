#= require_self
#= require_tree ./templates

# Change the template renderer
Backbone.Marionette.Renderer.render = (template, data) ->
  throw "Template '" + template + "' not found!"  unless JST[template]
  JST[template] data