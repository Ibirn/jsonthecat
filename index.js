const { fetchBreedDescription } = require("./breedFetcher");

const breed = process.argv.slice(2);

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});