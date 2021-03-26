
var currentQuote=""
var currentAuthor=""

function updateContent() {
    var random = Math.floor(Math.random() * 1643 + 1);


    fetch('https://type.fit/api/quotes')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentQuote=data[random].text
      currentAuthor=data[random].author
     
      $('#text').html(`<p class="card-text mt-4" id="text">
      <i class="fas fa-quote-left"></i>  ${data[random].text}</p>`);
  
      $('#author1').text(data[random].author);
    });
   

}
updateContent()

