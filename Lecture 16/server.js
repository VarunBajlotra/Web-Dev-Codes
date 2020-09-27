
const express = require('express')
const app = express()

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.all('/task',(req,res)=>{
//     res.send()
// })

let tasklist = []

app.get('/task',(req,res)=>{
    res.render('todos',{    
        title:'Learn HBS',
        tasklist
    })
})

app.post('/tasks',(req,res)=>{
    tasklist.push({
        name:req.body.name,
        priority:+(req.body.priority)
    })
    res.redirect('/task')
})

app.listen(4343,()=>{
    console.log('Server started at http://localhost:4343')
})