window.Router = Backbone.Router.extend(

  routes:
    '':             'home'
    'home':         'home'
    'iphone_cases': 'iphone_cases'
    'electronics':  'electronics'
    'kitchen':      'kitchen'
    'organization': 'organization'
    'gadgets': 'gadgets'

  home: ()->
    view = new Views.Products({collection: app.iphone_cases})
    app.content.show(view)
    app.iphone_cases.fetch()

  iphone_cases: ()->
    view = new Views.Products({collection: app.iphone_cases})
    app.content.show(view)
    app.iphone_cases.fetch()

  electronics: ()->
    view = new Views.Products({collection: app.electronics})
    app.content.show(view)
    app.electronics.fetch()

  kitchen: ()->
    view = new Views.Products({collection: app.kitchen})
    app.content.show(view)
    app.kitchen.fetch()

  organization: ()->
    view = new Views.Products({collection: app.organization})
    app.content.show(view)
    app.organization.fetch()

  gadgets: ()->
    view = new Views.Products({collection: app.gadgets})
    app.content.show(view)
    app.gadgets.fetch()

)