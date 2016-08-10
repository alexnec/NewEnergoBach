var app = app || {};

var CustomerView = Backbone.View.extend({
  template: _.template($('#customer-template').html()),
  initialize: function() {
    this.model = app.selectedModel;
    app.selectedModel.on('change', this.render, this);
    //this.model.on('change', this.render, this);
    //this.listenTo(app.selectedModel, 'change', this.render);
    this.render();
    //app.selectedModel.set({Id: 10050});
  },
  render: function () {
      this.$el.html(this.template(app.selectedModel.toJSON()));

      return this;
  },
  toggle: function() {
      this.$el.toggle();
  }
});
