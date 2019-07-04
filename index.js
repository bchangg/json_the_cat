const { fetchBreedDescription } = require("./breedFetcher");
const input = process.argv[2];
const breedName = input.substr(0, 4).toLowerCase();

fetchBreedDescription(breedName, (error, data) => {
  if (!data[0]) { 
    console.log(`Cannot find ${input}.\nPlease enter another breed!`);
    process.exit();
  }
  if (error) {
    console.log(`Unable to access API.\nERROR: ${error}`);
  } else {
    console.log(data[0].breeds[0].description);
  }
});