const request = require("request");

//CHANGE KEY
const url = `https://api.darksky.net/forecast/=/37.8267,-122.4233?units=us`;

request({url: url, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to conenct to weather service!')
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
    }
});

const gecodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.=.b2N47adVrzk9gINQKFjX5w`;

request({url: gecodeURL, json: true},(error, response) => {
    if(error) {
        console.log('Unable to conenct to location service!')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find location')
    } else{
        console.log(longitude, latitude);
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
    }
});
