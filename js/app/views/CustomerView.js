var CustomerView = Backbone.View.extend({
  template: _.template($('#customer-template').html()),
  initialize: function() {
    this.model = new Customer();
    
    this.render();
  },
  render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
  },
  toggle: function() {
      this.$el.toggle();
  }
});
