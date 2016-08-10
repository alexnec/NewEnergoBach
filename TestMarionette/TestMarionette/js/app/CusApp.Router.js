var CusApp = CusApp || {};

(function () {
    CusApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            'qwe': 'ss'
        }
    });

    CusApp.Controller = Backbone.Marionette.Object.extend({
        initialize: function () {
            this.cusList = new CusApp.cusList();
        },
        start: function () {
            this.showRootLayout(this.cusList);
        },
        showRootLayout: function (cusList) {
            var header = new CusApp.RootLayout({
                collection: cusList
            });
            CusApp.App.root.showChildView('header', header);
        }
    });
})();