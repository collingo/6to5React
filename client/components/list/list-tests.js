require('../../lib/testdom')(/* pass in custom html here if needed */);

var List = React.createFactory(require('./list'));

describe('List', function() {

  var sandbox = document.getElementById('sandbox');
  var list;

  beforeEach(function () {
    list = List({
      node: {
        children: []
      },
      onClick: function () {
        console.log('hello');
      }
    });
  });

  it('displayName is "List"', function() {
    assert.equal('List', list.type.displayName);
  });

  describe('when rendered with no data', function () {

    beforeEach(function () {
      React.render(list, sandbox);
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
      React.render(list, sandbox);
    });

  }); // with data

});