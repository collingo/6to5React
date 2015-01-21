var React = require('react');

class App {
  render() {
    return <div>Hello, {this.props.name}!</div>
  }
};

module.exports = React.createClass(App.prototype);