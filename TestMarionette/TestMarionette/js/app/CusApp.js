var CusApp = CusApp || {};

$(function () {
    CusApp.App.on('start', function () {
        var controller = new CusApp.Controller();
        controller.router = new CusApp.Router({
            controller: controller
        });

        controller.start();
        Backbone.history.start();
    });

    CusApp.App.start();
});