var app = app || {};
var Backbone = {View, Model}

app.TodoView = Backbone.View.extend({
  tagName:  'li',
  template: `<div class="view">
				        <input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
				        <label><%- title %></label>
				        <button class="destroy"></button>
			      </div>
			      <input class="edit" value="<%- title %>">`,

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  // Re-render the view.
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  markCompleted: function () {
      this.model.set('completed', true);
  }
});


app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  toggle: function () {
    this.save({
      completed: !this.get('completed')
    });
  }
});


