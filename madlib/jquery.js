$(function() {
 var endpoints = [

		// "https://kquea402.github.io/api.json"
		// "https://glics998.github.io/api.json"
		// "https://colindharrington.github.io/api.json"
		// "https://hoant626.github.io/api.json"
		// "https://karla772.github.io/api.json"
		// "https://leeh779.github.io/api.json"
		// "https://lis874.github.io/api.json"
		// "https://phoebechloee.github.io/api.json"
		// "https://luw779.github.io/api.json"
		// "https://mullg389.github.io/api.json"
		// "https://pana005.github.io/api.json"
		// "https://raos130.github.io/api.json"
		// "https://samsj948.github.io/api.json"
		// "https://shaha129.github.io/api.json"
		// "https://Mwedd9.github.io/api.json"
		// "https://zhenx804.github.io/api.json"

 	];

 	// $('button').click(function())

	$.get('https://Mwedd9.github.io/api.json', function(data) {
		console.log(data);
		var adjective1 = data.adjective1;

		$('.word-adjective-1').html(data.adjective1);
		$('.word-adjective-2').html(data.adjective2);
		$('.art-supply').html(data.artSupply);
		$('.computer-software').html(data.computerSoftware);
		$('.website-name').html(data.websiteName);
		$('.artist-name').html(data.artistName);
		$('.celebrity-name').html(data.celebrityName);
		$('.word-noun-1').html(data.noun1);
		$('.word-noun-2').html(data.noun2);
		$('.plural-noun-1').html(data.pluralNoun1);
		$('.plural-noun-2').html(data.pluralNoun2);
		$('.plural-noun-3').html(data.pluralNoun3);
        $('.verb-ing').html(data.verbEndingInIng);
		$('.place-new-york').html(data.placeInNewYork);
		$('.body-part').html(data.bodyPart);
		
		$('.word-numbers').html(data.numbers);




		$('.foods').html(data.foods.join (', ') );

	
	}).fail(function() {
		console.log ('Error in Get.')
	});
});