var CustomerView = Backbone.View.extend({
  tagName: "li",
  className: "customer-view",
  events: {
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
  }

});
