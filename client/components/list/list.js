var React = require('react');
var Todo = require('../todo/todo');

var List = {
  displayName: 'List',
  render: function () {
    var children = (this.props.node.children || [])
      .map(function (todo) {
        return (
          <Todo 
            key={todo.id}
            todo={todo}
            onClick={this.props.onClick}
          />
        );
      }, this);

    return (
      <div className="children">
        <ul>
          {children}
        </ul>
      </div>
    );
  }
};

module.exports = React.createClass(List);