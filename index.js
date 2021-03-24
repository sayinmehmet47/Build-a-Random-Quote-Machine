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
