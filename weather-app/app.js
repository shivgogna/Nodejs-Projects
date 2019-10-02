const request = require("request");

//CHANGE KEY
const url = `https://api.darksky.net/forecast//37.8267,-122.4233?units=us`;

request(
  {
    url: url,
    json: true
  },
  (error, response) => {
    console.log(
      `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`
    );
  }
);

const gecodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=`;

request({url: gecodeURL, json: true},(error, response) => {
      const latitude = response.body.features[0].center[1]
      const longitude = response.body.features[0].center[0]
    console.log(longitude, latitude);
});
