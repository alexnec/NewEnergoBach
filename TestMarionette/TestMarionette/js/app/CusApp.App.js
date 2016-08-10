var CusApp = CusApp || {};

(function () {
    var App = Backbone.Marionette.Application.extend({
        setRootLayout: function () {
            this.root = new CusApp.RootLayout();
        }
    });

    CusApp.App = new App();

    CusApp.App.on('before:start', function () {
        CusApp.App.setRootLayout();
    });

})();