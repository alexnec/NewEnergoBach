var CusApp = CusApp || {};

(function () {
    CusApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            'customerView': 'customerView',
            'customerListView': 'customerListView'
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
            CusApp.App.root.render();

            this.showCusView();
        },
        showCusView: function () {
            var cus = new CusApp.Customer();
            var customerView = new CusApp.CustomerView({
                model: cus
            });
            CusApp.App.root.showChildView('customerView', customerView);
        },
        customerView: function() {
            this.showCusView();
        },
        customerListView: function() {
            this.showCusListView();
        },
        showCusListView: function () {
            var customerListView = new CusApp.CustomerListView({
                collection: this.cusList
            });

            CusApp.App.root.showChildView('customerView', customerListView);
        }
    });
})();