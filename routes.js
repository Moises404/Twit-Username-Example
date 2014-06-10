var RootController = require('./controllers').RootController;
var TweetsController = require('./controllers').TweetsController;

module.exports = function (app) {
	app.get('/', RootController.index);
	app.get('/sadtweets/:id', TweetsController.show);
};