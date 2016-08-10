//    this.customerList = DataService.getData();
var CusApp = CusApp || {};

(function () {

CusApp.ListView = Backbone.Marionette.CompositeView.extend({
    template: '#customer-list-template',
    childView: CusApp.TodoView,
    childViewContainer: '#customer-list'
});
})();