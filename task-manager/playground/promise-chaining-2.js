require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d9cf7ddc59cad19a3ba84d3').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})