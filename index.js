const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

const API_KEY = 'D+LAKeTGHNZX0+f0s+n4aA==GprXGJXbynbdKDZL';  // use your own valid key
const API_URL = 'https://api.api-ninjas.com/v1/quotes';

async function fetchQuote() {
  try {
    quoteText.textContent = 'Loading...';
    quoteAuthor.textContent = '';

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
      },
    });

    if (!response.ok) throw new Error('API request failed');

    const data = await response.json(); // API returns an array
    const quote = data[0];

    quoteText.textContent = `“${quote.quote}”`;
    quoteAuthor.textContent = `— ${quote.author}`;
  } catch (error) {
    quoteText.textContent = 'Could not fetch a quote.';
    quoteAuthor.textContent = '';
    console.error('Fetch error:', error);
  }
}

newQuoteBtn.addEventListener('click', fetchQuote);
window.addEventListener('load', fetchQuote);
