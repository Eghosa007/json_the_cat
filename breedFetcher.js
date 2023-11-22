const request = require('request');

const fetchBreedDescription = function(breedName) {
  // API endpoint for breed search
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Making the request
  request(url, (error, response, body) => {
    // Check for request errors
    if (error) {
      console.error(`Error fetching data: ${error}`);
      return;
    }

    // Check if breed not found
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.error(`Breed '${breedName}' not found.`);
      return;
    }

    // Access the first entry in the data array
    const breed = data[0];
    // Print out the description for the user
    console.log(`${breed.name}: ${breed.description}`);
  });
};

// Check if breed name is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error("Usage: node breedFetcher.js <breed-name>");
} else {
  const breedName = process.argv[2];
  fetchBreedDescription(breedName);
}

