var CustomerItemView = Backbone.View.extend({
  template: _.template($('#customer-item-template').html()),
  events: {
    "click .customer-item"   : "setSelect"
  },
  render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
  },
  setSelect: function() {
    app.selectedModel = this.model;
    //app.selectedModel.set({Id: 10150});
    app.selectedModel.trigger('change');
  }
});
