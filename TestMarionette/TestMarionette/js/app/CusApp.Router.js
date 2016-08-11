var CusApp = CusApp || {};

(function () {
    CusApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            'toggle': 'toggleView'
        }
    });

    CusApp.Controller = Backbone.Marionette.Object.extend({
        initialize: function () {
            this.cusList = CusApp.DataService.getData();
        },
        start: function () {
            this.showRootLayout(this.cusList);
        },
        showRootLayout: function (cusList) {
            var header = new CusApp.RootLayout();
        },
        toggleView: function() {
            alert("To to to TO! Toggle")
        }
    });
})();