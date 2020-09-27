const express = require('express')
const server = express()
const storeData = require('./Routes/store_data')
const theftCheck = require('./theft_check')
const parking = require('./Routes/parking_data')

server.use(express.json())
server.use(express.urlencoded({extended: true}))

// server.use('/',express.static(__dirname+'/publi/Parking'))
server.use('/EntryPortal',express.static(__dirname + "/public/EntryPortal"))
server.use('/ExitPortal',express.static(__dirname + "/public/ExitPortal"))
server.use('/ParkingPortal',express.static(__dirname + "/Parking"))

server.use('/store_data',storeData)
server.use('/Parkingdetails',parking)
server.use('/theft_check',theftCheck)

server.listen(6979,()=>{console.log('listening at port 6979')})