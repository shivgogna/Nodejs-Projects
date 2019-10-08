//CRUD: Create, read, update, and delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Shiv',
    //     age: 28
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Sanchi',
    //         age: 28
    //     },
    //     {
    //         name: 'Shiv',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     } 
    //     console.log(result.ops)
    // })
    db.collection('task').insertMany([
        {
            description: 'Complete daily standup',
            completed: true
        },
        {
            description: 'Complete node course',
            completed: false
        },
        {
            description: 'Buy airplane ticket',
            completed: true
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to fetch task')
        } 

        console.log(result.ops)
    })
})