var CusApp = CusApp || {};

(function () {
    CusApp.CallbackToggleView = new Backbone.Marionette.Callbacks();

    CusApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            'customerView': 'customerView',
            'customerListView': 'customerListView'
        }
    });

    CusApp.Controller = Marionette.Controller.extend({
        initialize: function () {
            this.cusList = CusApp.DataService.getData();
            CusApp.CallbackToggleView.add(this.showCusView, this);
        },
        start: function () {
            this.showRootLayout(this.cusList);
        },
        showRootLayout: function (cusList) {
            CusApp.App.root.render();

            this.showCusView();
        },
        customerView: function() {
            this.showCusView();
        },
        customerListView: function() {
            this.showCusListView();
        },
        showCusView: function () {
            var cus = new CusApp.Customer();
            var customerView = new CusApp.CustomerView({
                model: cus
            });
            CusApp.App.root.showChildView('customerView', customerView);

            this.toggleFlagView = "CusView";
        },
        showCusListView: function () {
            var customerListView = new CusApp.CustomerListView({
                collection: this.cusList
            });

            CusApp.App.root.showChildView('customerView', customerListView);

            this.toggleFlagView = "CusListView";
        },
        toggleView: function () {
            if (this.toggleFlagView === "CusListView") {
                this.showCusView();
            }
            else if (this.toggleFlagView === "CusView") {
                this.showCusListView();
            }
        }
    });
})();