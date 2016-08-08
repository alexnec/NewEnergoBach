var CustomerListView = Backbone.View.extend({
  template: _.template($('#customer-list-template').html()),
  initialize: function() {
    this.customerList = DataService.getData();
    this.render();
  },
  render: function () {
      this.$el.html(this.template());

      _.each(this.customerList.models, function (item) {
        var itemView = new CustomerItemView({
          model: item
        });
        this.$el.append(itemView.render().el);
      }, this);

      return this;
  },
  toggle: function() {
      this.$el.toggle();
  }
});
