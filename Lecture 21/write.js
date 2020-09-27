const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err

    const testdb = client.db('testdb')

    const people = testdb.collection('people')

    people.insertOne({
        name:'PacMan',age:20,city:'Dholakpur'
    },(err,result)=>{
        if(err) throw err
        console.log(result)
    })

    // people.insertMany([
    //     {name:'Varun',age:19,city:'Delhi'},
    //     {name:'Vagish',age:18,city:'Pune'},
    //     {name:'Achint',age:17,city:'Bangalore'},
    //     {name:'Vaibhav',age:20,city:'Kolkata'},
    //     {name:'Vikas',age:22,city:'Delhi'},
    // ],(err,result)=>{
    //     if(err) throw err
    //     console.log(result)
    // })
})