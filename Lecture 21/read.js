const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err

    const testdb = client.db('testdb')

    const people = testdb.collection('people')

    people.find({
        $or: [
            { age : {$gt: 20}},
            { age : {$lt:18}}
        ]
    }).toArray((err,result)=>{
        if(err) throw err
        console.log(result)
    })

    // people.remove({
    //     age:{$gt:20}
    // })
})