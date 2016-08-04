var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#id-view-container',
  statsTemplate: _.template( $('#item-template1').html() ),
  initialize: function() {
    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);
  },
  showView1: function( todo ) {
    var view = new app.TodoView({ model: todo });
    $('#todo-list').append( view.render().el );
  },
  showView2: function() {
    this.$('#todo-list').html('');
    app.Todos.each(this.addOne, this);
  }
});
