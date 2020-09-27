console.log('in store data')
const route = require('express').Router()
var firebase = require('firebase/app');
require('firebase/database')

const firebaseConfig = {
    apiKey: "AIzaSyDL1yYPQ8Ntigkdjv4qymkqhoQ8YfhQjVU",
    authDomain: "hackitout-6ee0b.firebaseapp.com",
    databaseURL: "https://hackitout-6ee0b.firebaseio.com",
    projectId: "hackitout-6ee0b",
    storageBucket: "hackitout-6ee0b.appspot.com",
    messagingSenderId: "604967948481",
    appId: "1:604967948481:web:09206a85c683658177c440",
    measurementId: "G-2RE3JZPRJ8"
};
firebase.initializeApp(firebaseConfig);

//in which path the object will be added
route.post('/',(req,res)=>{
    var new_obj = {
       Name: req.body.Name,
       phoneNumber: req.body.phoneNumber,
       carNumber: req.body.carNumber,
       time: req.body.time
    }
    
      var database = firebase.database();
      firebase.database().ref('Car Parking/' + req.body.date + '/' + req.body.key).set(new_obj);
    //   firebase.database().ref('Car Parking Database/' + req.body.date + '/' + req.body.key).set(new_obj);
      res.send('');
})

module.exports = route