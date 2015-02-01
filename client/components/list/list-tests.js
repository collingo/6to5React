require('../../lib/testdom')(/* pass in custom html here if needed */);

var List = React.createFactory(require('./list'));

describe('List', function() {

  var sandbox = document.getElementById('sandbox');
  var list;

  describe('when rendered with no data', function () {

    beforeEach(function () {
      list = List({
        node: {
          children: []
        },
        onClick: function () {
          console.log('hello');
        }
      });
      React.render(list, sandbox);
    });

    it('displayName is "List"', function() {
      assert.equal('List', list.type.displayName);
    });

    it('is appended to correct location', function() {
      assert.equal(1, sandbox.childNodes.length);
    });

    it('is a div', function() {
      assert.equal('DIV', sandbox.childNodes[0].nodeName);
    });

    it('has a class "children"', function() {
      assert.equal('children', sandbox.childNodes[0].className);
    });

    it('has 0 list items', function() {
      assert.equal(0, document.querySelectorAll('.children li').length);
    });

  }); // no data

  describe('when rendered with data', function () {

    beforeEach(function () {
      list = List({
        node: {
          id: 0,
          children: [{
            id: 1,
            children: []
          }, {
            id: 2,
            children: []
          }, {
            id: 3,
            children: []
          }]
        },
        onClick: function () {
          console.log('hello');
        }
      });
      React.render(list, sandbox);
    });

    it('has 3 list items', function() {
      assert.equal(3, document.querySelectorAll('.children li').length);
    });

  }); // with data

});