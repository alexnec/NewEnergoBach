var CusApp = CusApp || {};


window.App.Define('../../js/app/CusApp.App.js', [], function (pExport) {
    (function () {
        var App = Backbone.Marionette.Application.extend({
            setRootLayout: function () {
                //                this.root = new CusApp.RootLayout();
                console.log("I`m started ololo");
            }
        });

        CusApp.App = new App();

        CusApp.App.on('before:start', function () {
            CusApp.App.setRootLayout();
        });

    })();
});
