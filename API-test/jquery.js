$(function() {
	console.log("hello");

	var url = 'https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=c214ededb4d29c7bbbcebdf88a3d5365'

    $.get(url, function(data) {
    // The get request fires a callback function when the API request finishes
    console.log(data);
    // The data object contains all the information returned in the API
    var weather = data.weather[0];
    // In this case, the most interesting bit of data is in the weather key
    // Now do something interesting with the data!
    $('body').html('The weather is ' + weather.description);


    var image1 = document.getElementById('clear');
    var image2 = document.getElementById('rain');

    // $('#theDiv').prepend('<img id="theImg" src="clear.jpg" />')



   //  var temp = data.main.temp;
   //  var hotKelvin = 316;
   //  var rgb = temp / hotKelvin * 225;
   // var rgbTemp  = data
   //  console.log('temp', temp);
   //  console.log('rgb', rgbTemp);

   //  $('body') .css('background', 'rgb(' + rgbTemp + ', 0, 0)');

   //  var icon = data.weather[0].icon;
    var image = '<img src="' + icon + '.jpg">';

   //  $('body').append(image);


   //  if (speed >= 7){
   //    document.body.style.backgroundColor = "red";
   //    console.log(speed, "blue")

   //  }
   //  else{
   //    document.body.style.backgroundColor = "blue";
   //  }

//    var url = 'http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=be50dd36b67269580c4577af42f2870e';
// $.get(url, function(results) {
  // The get request fires a callback function when the API request finishes
//   console.log(results);
  // The data object contains all the information returned in the API
  var weather = results.weather[0];
  var weathertext = results.weather[0].main;
  var humidity = results.main.humidity;
  var temp = results.main.temp;

for(var counter=0; counter< 1; counter++){
  console.log('counter', counter);
  console.log('weathertext', weathertext);
          
//           var video1 =document.getElementById("video1");
//           var video2 =document.getElementById("video2");
//           var video3 =document.getElementById("video3");

         if(weathertext == 'Rain'){
          $('body').append(image1);
                    
        } else if(weathertext == 'Clear'){
            $('body').append(image2);

        } else if(weathertext == 'Clouds'){
          $('body').append(image3);

        }



  

  });

});
