var CusApp = CusApp || {};

(function () {
    CusApp.RootLayout = Backbone.Marionette.LayoutView.extend({
        template: "#AppTemplate",
        el: '#id-view-app',
        ui: {
            input: '#togleButtonWrapper'
        },
        regions: {
            customerView: '#customer-view'
        }
    });
})();
