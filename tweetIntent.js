// Define a function called tweetQuote
const tweetQuote = () => {
  const quote = quoteText.innerHTML.replace(/<br>/g, '\n');
  const author = authorText.textContent;
  const hashtags = ' #yourhashtags';

  // Create a twitter URL using the quote, author, and hashtags and store it in the twitterUrl variable
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}%0A-${encodeURIComponent(author)}%0A${encodeURIComponent(hashtags)}`;

  // Open a new window with the twitter URL and specify "_blank" as the window target
  window.open(twitterUrl, "_blank");
}