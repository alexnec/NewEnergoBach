var CusApp = CusApp || {};
App.debug = 1;

window.App.Require([
    '../../js/app/CusApp.App.js'
],
function () {
//    CusApp.App.on('start', function () {
//        var controller = new CusApp.Controller();
//        controller.router = new CusApp.Router({
//            controller: controller
//        });

//        controller.start();
//        Backbone.history.start();
//    });

    CusApp.App.start();
});