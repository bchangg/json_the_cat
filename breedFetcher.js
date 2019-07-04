const request = require("request");

const fetchBreedDescription = function(breedName, cb) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    cb(error, data);
  });
};

module.exports = {
  fetchBreedDescription
};