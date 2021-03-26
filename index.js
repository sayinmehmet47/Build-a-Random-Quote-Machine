var bgColor;
function random_bg_color() {
  var x = Math.floor(Math.random() * 120);
  var y = Math.floor(Math.random() * 120);
  var z = Math.floor(Math.random() * 120);
  bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  return bgColor;
}




$(document).ready(function () {
  $('#quote-box')
    .parent()
    .parent()
    .css('background-color', `${random_bg_color()}`);
  $('#text').css('color', `${bgColor}`);
  $('#author1').css('color', `${bgColor}`);
  
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );
});

$('button').on('click', function (e) {
  $('#quote-box')
    .parent()
    .parent()
    .animate({ backgroundColor: `${random_bg_color()}` }, 1500);
  $('#text').animate({ color: `${bgColor}` }, 1500);
  $('#author1').animate({ color: `${bgColor}` }, 1500);

  updateContent();

  e.preventDefault();
});




$("#tweet-quote").on("click",function(){

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );


})






$("#tumblr").on("click",function(){
 
  $('#tumblr').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(currentAuthor) +
      '&content=' +
      encodeURIComponent(currentQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );


})

