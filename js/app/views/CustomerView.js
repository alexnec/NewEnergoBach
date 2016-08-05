var CustomerView = Backbone.View.extend({
  template: _.template($('#customer-template').html()),
  className: "customer-view",
  render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
  },
  toggle: function() {
      this.$el.toggle();
  }
});
