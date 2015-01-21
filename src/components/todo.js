var React = require('react');

class Todo {
  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.text}
      </li>
    );
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.todo.id);
  }
};

module.exports = React.createClass(Todo.prototype);