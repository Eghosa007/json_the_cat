const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (!breedName) {
  console.error("Usage: node index.js <breed-name>");
} else {
  fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetching details:', error);
    } else {
      console.log(desc);
    }
  });
}
