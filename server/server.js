var koa = require('koa');
var serve = require('koa-static');
var app = koa();
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

app.use(serve(__dirname + '/../' + config.clientDir));

app.listen(config.port);

console.log('listening on port '+config.port);