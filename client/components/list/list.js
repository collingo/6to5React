import React from 'react';
import Todo from '../todo/todo';

var List = {
  displayName: 'List',
  render: function () {
    var children = (this.props.node.children || [])
      .map((todo) => <Todo 
        key={todo.id}
        todo={todo}
        onClick={this.props.onClick}
      />, this);

    return (
      <div className="children">
        <ul>
          {children}
        </ul>
      </div>
    );
  }
};

export default React.createClass(List);