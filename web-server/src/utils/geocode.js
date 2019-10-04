const request = require('request');

const geocode = (address, callback) => {
    //ADD URL WITH KEY
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2hpdm5naWdnbGVzIiwiYSI6ImNrMTlramF2czIzOG8zb28zOWI2ejEwNGgifQ.b2N47adVrzk9gINQKFjX5w`
    
        request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to connect to location services!', undefined)
            } else if (body.features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        })
    }
    
    module.exports = geocode