require('node-jsx').install();

module.exports = function(markup) {
  if (typeof document !== 'undefined') return
  var jsdom          = require("jsdom").jsdom
	global.document 	 = jsdom(markup || '<html><body><div id="sandbox"></div></body></html>', {});
	global.window 		 = document.parentWindow;
	global.navigator 	 = window.navigator;
  // ... add whatever browser globals your tests might need ...
	global.assert 				= require('assert');
	global.React          = require('react');
	global.ReactAddons    = require('react/addons');
	global.ReactTestUtils = React.addons.TestUtils;
}