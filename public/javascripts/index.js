(function () {
	var username;
	var methods = {
		init: function () {
			alert('Initialized init function!');
			methods.initSubmitHandler();
		},
		initSubmitHandler: function () {
			alert('Initialized get sad Tweets handler!');
			$( "#get-sad-tweets" ).submit(function( event ) {
				methods.getSadTweets();
				event.preventDefault();
			});
		},
		getSadTweets: function () {
			username = $('#username-input').val();
			console.log('username: ' + username);
			// AJAX CALL
			var params = {
				url: 'http://localhost:3000/sadtweets/' + username,
				dataType: 'json',
				data: {
					username: username
				},
				success: function (data) {
					console.log('data: ' + data);
					$('.sadTweets').empty();
					$('.sadTweets').append('Here are the sad tweets for user ' + '<b>' + data.id + '</b>')
				} // end of sucess
			}; // end of params
			$.ajax(params);
		}
	};
	window.Tweets = methods;
})();



			// 	// get value from input form
			// 	username = $('#username-input').val();
			// 	alert( 'Handler for .submit() called. ' + 'Your value is ' + username );
			// 	event.preventDefault();
			// 	//return false;
			// });