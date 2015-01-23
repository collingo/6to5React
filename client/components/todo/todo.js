var React = require('react');

var Todo = {
  displayName: 'Todo',
  render: function () {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.text}
      </li>
    );
  },
  handleClick: function (e) {
    e.preventDefault();
    this.props.onClick(this.props.todo.id);
  }
};

module.exports = React.createClass(Todo);