AppView = Backbone.View.extend({
  template: _.template($('#AppTemplate').html()),
  el: "#id-view-app",
  events: {
      "click #toggleButton": "ToggleView",
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());

    var cusModel = new Customer();
    this.cusView = new CustomerView({
      model: cusModel
    });

    var cusModel1 = new Customer({
      Id: 123,
      FIO: "Test Fio",
      Rating: 111
    });
    this.cusView1 = new CustomerView({
      model: cusModel1
    });

    $('#customer-view', this.el).append(this.cusView.render().el);
    $('#customer-view', this.el).append(this.cusView1.render().el);
    this.cusView1.toggle();
  },
  ToggleView: function() {
    this.cusView.toggle();
    this.cusView1.toggle();
  }
});
