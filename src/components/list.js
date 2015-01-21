var React = require('react');
var Todo = require('./todo.js');

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

module.exports = React.createClass(List.prototype);