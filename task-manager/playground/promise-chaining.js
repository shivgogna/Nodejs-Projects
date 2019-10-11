require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5d9cfd3bc073d81b13ab1b95', { age: 55 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 55 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

