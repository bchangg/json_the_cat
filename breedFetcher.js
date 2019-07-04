// 'use strict'

const request = require("request");
let catBreed = process.argv[2].substr(0, 4).toLowerCase();

request(`https://api.thecatapi.com/v1/images/search?breed_ids=${catBreed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (!error) {
    if (!data[0]) {
      console.log(`You have entered an invalid breed name.\nPlease rerun program with different name.`);
    } else {
      console.log(data[0].breeds[0].description);
    }
  } else {
    console.log(`The API has returned ERROR: ${error}`);
  }
});