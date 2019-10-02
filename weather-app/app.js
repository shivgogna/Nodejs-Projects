const request = require('request')

const url = 'https://api.darksky.net/forecast//37.8267,-122.4233'

request({ url: url }, (error, response) => {
    console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.currently)
})