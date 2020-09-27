const express = require('express')
const route = express.Router()

let courses = []

route.get('/',(req,res)=>{
    res.send(courses)
})

route.post('/',(req,res)=>{
    courses.push({
        name:req.body.name,
        teachers:req.body.teachers,
        lectures:req.body.lectures,
        subject:req.body.subject
    })
})

module.exports = route