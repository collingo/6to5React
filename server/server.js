var App = require('express');
var app = App();
var env = process.env.ENV || 'development';
var envConfig = {
	development: {
		clientDir: 'dev',
		port: 8001
	},
	production: {
		clientDir: 'build',
		port: 8000
	}
};
var config = envConfig[env];

app.use(App.static(__dirname + '/../' + config.clientDir));

app.listen(config.port);

console.log('listening on port '+config.port);