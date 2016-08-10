$(function () {
    _.templateSettings = {
        interpolate: /{%([\s\S]+?)%}/g,
        interpolate : /{%=([\s\S]+?)%}/g,
        escape      : /{%-([\s\S]+?)%}/g
    };

  var controller = new Router();

  Backbone.history.start();
});
