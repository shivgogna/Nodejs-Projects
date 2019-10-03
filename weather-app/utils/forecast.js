const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //ADD URL WITH KEY
    const url = ``;

    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to conenct to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to conenct to weather service!", undefined);
        } else {
            callback( undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`
        );
        }
    });
};

module.exports = forecast