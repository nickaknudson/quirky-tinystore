Collections.Products = Backbone.Collection.extend(

  model: Models.Product

  initialize: (models,options)->
    @list = options.list

  urlRoot: "/products"

  url: ()->
    return "/products/#{@list}"

  parse: (res)->
    return res.products

)