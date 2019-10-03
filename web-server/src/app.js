const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        location: 'Corona',
        forecast: 'It is bright and sunny'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})