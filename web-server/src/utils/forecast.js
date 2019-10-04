const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //ADD URL WITH KEY
    const url = `https://api.darksky.net/forecast/b20b3bab2e604453cee24723ff75a3c1/${latitude},${longitude}`;
    
        request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            }
        })
    }
    
    module.exports = forecast