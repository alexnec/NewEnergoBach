AppView = Backbone.View.extend({
  template: _.template($('#AppTemplate').html()),
  el: "#id-view-app",
  events: {
      "click #toggleButton": "ToggleView",
  },
  initialize: function() {
    //_.bindAll(this, 'render');
    //default model
    app.selectedModel = new Customer();
    this.cusView = new CustomerView();
    this.cusListView = new CustomerListView();

    this.render();
  },
  render: function() {
    this.$el.html(this.template());

    $('#customer-view', this.el).append(this.cusView.render().el);
    $('#customer-list', this.el).append(this.cusListView.render().el);
    this.cusListView.toggle();
  },
  ToggleView: function() {
    this.cusView.toggle();
    this.cusListView.toggle();
  }
});
