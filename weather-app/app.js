const geocode = require("./utils/geocode");
const forecast = require('./utils/forecast')

// request({url: url, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to conenct to weather service!')
//     } else if(response.body.error) {
//         console.log('Unable to conenct to weather service!')
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
//     }
// });

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

// request({url: gecodeURL, json: true},(error, response) => {
//     if(error) {
//         console.log('Unable to conenct to location service!')
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find location')
//     } else{
//         console.log(longitude, latitude);
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//     }
// });

geocode("Corona", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
