$(function() {


 	// $('button').click(function())

	$.getJSON('https://api.adviceslip.com/advice', function(data) {
		console.log(data);
		var advice = data.slip.advice;
		var adviceID = data.slip.slip_id;

		console.log(advice);

		// $('.advice').html(data.slip.slip_id);

		
		$('.advice').html(data.slip.advice);

	
	
	}).fail(function() {
		console.log ('Error in Get.')
	});

	$('.face').click(function() {
		$.getJSON('https://api.adviceslip.com/advice', function(data) {
			console.log(data);
			var advice = data.slip.advice;
			var adviceID = data.slip.slip_id;

			console.log(advice);

			$('.advice').html(data.slip.advice);
		
		
		}).fail(function() {
			console.log ('Error in Get.')
		});
	});
});