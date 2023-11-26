const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // API endpoint for breed search
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Making the request
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Breed '${breedName}' not found.`, null);
      return;
    }

    const breed = data[0];
    callback(null, breed.description);
  });
};

module.exports = { fetchBreedDescription };
