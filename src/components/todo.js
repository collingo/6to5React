import React from 'react';

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

export default React.createClass(Todo.prototype);