var React = require('react');

class App {
  getInitialState() {
    return {
      greeting: 'Welcome to React'
    };
  }
  render() {
    return <div>Hello, {this.props.name}! {this.state.greeting}</div>
  }
};

module.exports = React.createClass(App.prototype);