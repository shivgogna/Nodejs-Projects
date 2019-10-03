const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//DEFINE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        helpTex: 'This is some helpful text',
        title: 'Help',
        name: 'Shiv Gogna',
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide a valid address!'
        })
    }
    res.send({
        forecast: 'It is bright and sunny',
        location: 'Corona',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shiv Gogna',
        errorMessage: 'Help article not found'
    })
})

app.get('/about/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shiv Gogna',
        errorMessage: 'Help page not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shiv Gogna',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})