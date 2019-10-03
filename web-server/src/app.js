const path = require('path')
const express = require('express')


const app = express()

//DEFINE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//SETUP STATIC DIRECTORY TO SERVE
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Shiv Gogna'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: 'Darth Vader',
        img: './img/DV'
    })
})

app.get('/help', (req, res) => {
    res.render('./help', {
        title: 'Help'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Corona',
        forecast: 'It is bright and sunny'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})