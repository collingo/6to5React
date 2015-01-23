import React from 'react';

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

export default React.createClass(Todo);