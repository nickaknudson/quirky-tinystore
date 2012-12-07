window.Router = Backbone.Router.extend(

  routes:
    '':         'home'

  home: ()->
    app.content.show(app.iphone_cases_view)

)