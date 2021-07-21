var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// function get random quote
function getQuote() {
    fetch(endpoint)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(data){
            displayQuote(data.message);
        })
        .catch(function(){
            console.log('An error happended!')
        });
}

function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

// target button class new-quote
var newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);

getQuote();