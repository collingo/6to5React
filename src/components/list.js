import React from 'react';
import Todo from './todo.js';

class List {
  render() {
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

export default React.createClass(List.prototype);