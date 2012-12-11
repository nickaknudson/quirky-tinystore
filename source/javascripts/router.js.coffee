window.Router = Backbone.Router.extend(

  routes:
    '':             'home'
    'home':         'home'
    'iphone_cases': 'iphone_cases'
    'electronics':  'electronics'

  home: ()->
    app.iphone_cases_view = new Views.Products({collection: app.iphone_cases})
    app.content.show(app.iphone_cases_view)
    app.iphone_cases.fetch()

  iphone_cases: ()->
    app.iphone_cases_view = new Views.Products({collection: app.iphone_cases})
    app.content.show(app.iphone_cases_view)
    app.iphone_cases.fetch()

  electronics: ()->
    app.electronics_view = new Views.Products({collection: app.electronics})
    app.content.show(app.electronics_view)
    app.electronics.fetch()

)