$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'https://www.casacenina.com/catalog/images/img_236/aloha-10408.jpg';
  } else if ( key == 'b' ) {
    img = 'https://nyoobserver.files.wordpress.com/2015/03/bobbay.png?w=635&h=446';
  } else if ( key == 'c' ) {
    img = 'https://ichef.bbci.co.uk/images/ic/640x360/p05q0hh4.jpg';
  }  else if ( key == 'd' ) {
    img = 'https://i.chzbgr.com/full/9276705024/h6BD0C848/';
  }



  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; right: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});