app.TodoItem = React.createClass({
  handleChange: function (event) {
    this.setState({editText: event.target.value});
  },

  getInitialState: function () {
    return {editText: this.props.todo.title};
  },

  render: function () {
    return (
      <li>
        <div className="view">
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.handleChange}
          />
          <label>{this.props.todo.title}</label>
        </div>
      </li>
    );
  }
});


shouldComponentUpdate: function (nextProps, nextState) {
  return (
    nextProps.todo !== this.props.todo ||
    nextProps.editing !== this.props.editing ||
    nextState.editText !== this.state.editText
  );
},
