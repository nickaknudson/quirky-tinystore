Models.Product = Backbone.RelationalModel.extend(

  urlRoot: "/products"

  parse: (res)->
    return res.product

)