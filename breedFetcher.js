const request = require("request");

//refactoring: needs to be a function that takes a callback of two arguments for error and success.
const fetchBreedDescription = (breed, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
    //we need to run the callback in all cases, success or fail, so we change this from a console.log(error) to a callback with both an error and a data, even if the data is null. This is a failure state, so we only need the error message, and it's safe to say the data is null.
      callback("Error:\n" + error, null);
      return;
    }
    const data = JSON.parse(body);

    if (data[0] === undefined) {
    //callback in all cases. Needs an error and data. Failure state, so error is string, data is null.
      callback('Breed not listed in Cat API.', null);
      return;
    }
    //success state. No errors, so it's null and data is passed for callbacks second arguemnt.
    callback(null, data[0]["description"]);
  });
};

module.exports = {fetchBreedDescription};
