import React from 'react';
import List from './list.js';
import R from 'ramda';

// patching in 'call' as it seemed to be missing
// from 0.8.0 even though it is documented
// http://ramdajs.com/docs/R.html#call
R.call = function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
};

var data = [{
  id: 0,
  text: 'Shopping',
  children: [1,2,3]
}, {
  id: 1,
  parent: 0,
  text: 'Eggs',
}, {
  id: 2,
  parent: 0,
  text: 'Bread',
  children: [4]
}, {
  id: 3,
  parent: 0,
  text: 'Milk'
}, {
  id: 4,
  parent: 2,
  text: 'Flour',
  children: [5]
}, {
  id: 5,
  parent: 4,
  text: 'Grain'
}];

var getData = R.pipe(
  R.pipe(
    R.flip(R.call),
    R.flip(R.map)([
      R.pipe(
        R.propEq('id'),
        R.flip(R.find)(data),
        R.prop('children'),
        R.map(
          R.pipe(
            R.propEq('id'),
            R.flip(R.find)(data)
          )
        )
      ),
      R.pipe(
        R.propEq('id'),
        R.flip(R.find)(data)
      )
    ])
  ),
  R.apply(R.assoc('children'))
);

class App {
  getInitialState() {
    return getData(0);
  }
  render() {
    return (
      <div id="TodoApp">
        <h1>{this.state.text || 'Todo'}</h1>
        <button onClick={this.clickBack}>Back</button>
        <List node={this.state} onClick={this.todoClick} />
      </div>
    );
  }
  todoClick(todoId) {
    this.setState(getData(todoId));
  }
  clickBack(e) {
    e.preventDefault();
    this.setState(getData(this.state.parent));
  }
};

export default React.createClass(App.prototype);