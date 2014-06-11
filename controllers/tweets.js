// GET / tweets

exports.show = function (req, res) {
	console.log(req.params);
	//var id = req.params('username');
	//res.send('Hello ' + id + '!');
	res.send(req.params);
};