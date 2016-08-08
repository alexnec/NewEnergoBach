var CustomerItemView = Backbone.View.extend({
  template: _.template($('#customer-item-template').html()),
  render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
  }
});
