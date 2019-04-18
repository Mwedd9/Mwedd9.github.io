$(function() {
	$.get('https://Mwedd9.github.io/api.json', function(data) {
		console.log(data);
		var adjective1 = data.adjective1;

		$('.word-adjective-1').html(data.adjective1);
		$('.word-adjective-2').html(data.adjective2);
		$('.art-supply').html(data.artSupply);
		$('.computerSoftware').html(data.computerSoftware);
		$('.word-adjective-2').html(data.adjective2);
		$('.art-supply').html(data.artSupply);
	
	}).fail(function() {
		console.log ('Error in Get.')
	});
});