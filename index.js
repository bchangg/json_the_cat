const { fetchBreedDescription } = require("./breedFetcher");
const input = process.argv[2];

fetchBreedDescription(input, (error, desc) => {
  if (!desc) {
    console.log(`Cannot find ${input}.\nPlease enter another breed!`);
  }
  if (error) {
    console.log(`Unable to access API.\nERROR: ${error}`);
  } else {
    console.log(desc);
  }
});