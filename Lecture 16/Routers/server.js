const express = require('express')
const app = express()

const routes={
    teachers:require('./routes/teachers'),
    courses:require('./routes/courses')
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/teachers',routes.teachers)
app.use('/courses',routes.courses)

app.listen(4321,(req,res)=>{
    console.log('Server started at http://localhost:4321')
})