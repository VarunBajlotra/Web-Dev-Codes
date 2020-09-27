const express = require('express')
const app = express()

const PORT = process.env.PORT || 4321

app.get('/',(req,res)=>{
    res.send('Hello! This is a sample app')
})

app.get('/hi',(req,res)=>{
    res.send('Hello '+req.query.name)
})

app.get('bye',(req,res)=>{
    res.send('Goodbye! '+req.query.name)
})

app.listen(PORT,()=>{
    console.log('Server started at http://localhost:4321 ' + PORT)
})