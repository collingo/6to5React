var App = require('express');
var morgan = require('morgan');
var cons = require('consolidate');

// environment
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

// app setup
var app = App();
app.engine('html', cons.underscore);
app.set('view engine', 'html');
app.set('views', '../client');

// logging
var logFormat = JSON.stringify({
  "method": ":method",
  "url": ":url",
  "status": ":status",
  "date": ":date[iso]",
  "duration": ":response-time ms",
  "content_length": ":res[content-length]"
});
app.use(morgan(logFormat));

// dynamic routes
app.get('/', function (req, res) {
  res.render('index');
});

// static routes
if(env === 'production') {
	app.use('/client', App.static(__dirname + '/../client'));
}
app.use(App.static(__dirname + '/../' + config.clientDir));

// go!
app.listen(config.port);
console.log('listening on port '+config.port);