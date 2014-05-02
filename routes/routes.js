module.exports = function(app) {
	var routes = require('./index');
	app.use('/', routes);
	var users = require('./users');
	app.use('/users', users)
};