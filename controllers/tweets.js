// GET / tweets

exports.show = function (req, res) {
	var id = req.params('username');
	res.send('Hello ' + id + '!');
};