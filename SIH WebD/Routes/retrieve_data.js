const route = require('express').Router()
var firebase = require('firebase/app');
require('firebase/database')

var firebaseConfig = {
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
    
      let database = firebase.database();
      let currentTime = new Date();

        let currentOffset = currentTime.getTimezoneOffset();

        let ISTOffset = 330;   // IST offset UTC +5:30 

        let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

        let hoursIST = ISTTime.getHours()
        let minutesIST = ISTTime.getMinutes()
        let timeIST = hoursIST + ":" + minutesIST;
        let dateIST = ISTTime.getDate() + '/' + Number(ISTTime.getMonth()+1) + "/" + ISTTime.getFullYear()

      firebase.database().ref('sih/' + req.body.date + '/' + req.body.key).once('value')
      .then(function(snapshot){
         console.log(snapshot.val());
      }) ;

      res.send(true);
})

module.exports = route