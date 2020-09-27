const express = require('express')
const app = express()

app.use('/',express.static(__dirname+'/public'))

let todos=[]

app.get('/todos',(req,res)=>{
    res.send(todos)
})

app.get('/addtodo',(req,res)=>{
    todos.push(req.query.newtodo)
    // res.redirect('/todos')   // or res.send('success')
    res.send('success')
})

//Make codes for updation and deletion

app.listen(4346,()=>{

})
