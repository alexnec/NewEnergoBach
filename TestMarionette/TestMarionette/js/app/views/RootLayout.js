var CusApp = CusApp || {};

(function () {
    CusApp.RootLayout = Backbone.Marionette.LayoutView.extend({
        template: "#AppTemplate",
        el: '#id-view-app',
        events: {
            'click #toggleButton' : 'toggleView'
        },
        regions: {
            customerView: '#customer-view'
        },
        toggleView: function () {
            alert("!");
        }
    });
})();
