//Grab Twitter NPM Package
require('dotenv').config();
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');

//create new Twitter client to be used in liri.js
var client = new Twitter({
  consumer_key: 'y0ZENYQSEN4Qxax4CxQT32RwK',
  consumer_secret: 'Qe0KvkGlUh0JTxUcNYUQDDgzw7nvggbViDXQ3rDHBziONQenuc',
  access_token_key: '962440454708002816-uYbAuzATvZg5hAiPIocyWDzaxeSw4fX',
  access_token_secret: 'As2YEnTrtXurRAXO29e5kxkTlWjZlfOexiZP4CbiWlFyH',
});
 
var spotify = new Spotify({
  id:  '82ef902e84b742e6837942fdfb95fe25',
  secret: '276b4cbc8cae4357b1c872b829998b38'
});

//export keys so they can be used elsewhere
module.exports.client = client;
module.exports.spotify = spotify;


