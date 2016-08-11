//    this.customerList = DataService.getData();
var CusApp = CusApp || {};

(function () {

CusApp.CustomerListView = Backbone.Marionette.CompositeView.extend({
    template: '#customer-list-template',
    childView: CusApp.CustomerItemView,
    childViewContainer: '#customer-list'
});
})();