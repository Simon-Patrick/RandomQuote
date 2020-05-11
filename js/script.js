/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the 'Project Resources' section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  quote = {
    quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    source: 'Albert Einstein',
    citation: '',
    year: null
  },
  quote = {
    quote: 'History will be kind to me for I intend to write it.',
    source: 'Winston Chruchill',
    citation: '',
    year: null
  },
  quote = {
    quote: 'Some people believe football is a matter of life and death, I am very disappointed with that attitude. I can assure you it is much, much more important than that.',
    source: 'Bill Shankly',
    citation: '',
    year: null
  },
  quote = {
    quote: 'You\'re gonna need a bigger boat.',
    source: 'Chief Brody',
    citation: 'Jaws',
    year: 1975
  },
  quote = {
    quote: 'Bond. James Bond.',
    source: 'James Bond',
    citation: 'Dr. No',
    year: 1962
  },
]

/***
 * `getRandomQuote` function
 * Gets a random number between 0 and the length of the quotes array
 * Returns that quote when called from the printQuote function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber]
  return randomQuote;
}

/***
 * `printQuote` function
 * Gets a random quote. Sets the inital html of the quote and source paragraphs.
 * Conditional checks if citation and year are added and if they are it adds them to the quote
***/
function printQuote() {
  const selectedQuote = getRandomQuote();
  let html = `<p class='quote'> ${selectedQuote.quote} </p> <p class='source'> ${selectedQuote.source}`
  if(selectedQuote.citation != '') {
    html += `<span class="citation"> ${selectedQuote.citation} </span>`
  } 
  if (selectedQuote.year != null) {
    html += `<span class="year"> ${selectedQuote.year} </span>`
  }
  html += `</p>`
  let quoteContainer = document.querySelector('.quote-box');
  quoteContainer.innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);