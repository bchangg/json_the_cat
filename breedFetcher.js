const request = require("request");

const fetchBreedDescription = function(breedName, cb) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName.substr(0,4)}`, (error, response, body) => {
    let data = JSON.parse(body);
    // console.log(`data is`, data);
    // console.log(`data[0] is`, data[0]);
    let desc;
    if (!data[0]) {
      desc = `Cannot find ${breedName}.\nPlease enter another breed!`;
    } else {
      desc = data[0].breeds[0].description.trim();
    }
    cb(error, desc);
  });
};

module.exports = {
  fetchBreedDescription
};