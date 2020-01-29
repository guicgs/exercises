const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (fetch) => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};
    
module.exports = fetchJoke;
