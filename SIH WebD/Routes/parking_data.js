console.log('in parking data')

const route = require('express').Router()
var firebase = require('firebase/app');
require('firebase/database')

var firebaseConfig = {
    apiKey: "AIzaSyDCIcrq4CoYoFxRGs0GowtiKFPZn4LFjYE",
    authDomain: "check-in-bad3b.firebaseapp.com",
    databaseURL: "https://check-in-bad3b.firebaseio.com",
    projectId: "check-in-bad3b",
    storageBucket: "check-in-bad3b.appspot.com",
    messagingSenderId: "816775636146",
    appId: "1:816775636146:web:c17eb43065b1534dd455ab"
};

// Initialize Firebase
var secondary = firebase.initializeApp(firebaseConfig,"secondary");

route.post('/',(req,res)=>{
    var ref = secondary.database().ref();
    var slot1 = ref.child("large slots")
    var slot2 = ref.child("small slots")

    var s,temp;
    slot1.on("value", function(snapshot) {
        s = Object.entries(snapshot.val());
        // console.log(s);
    }, function (error) {
    console.log("Error: " + error.code);
    });
    
    slot2.on("value", function(snapshot) {
        temp = Object.entries(snapshot.val());
        temp.forEach(([key,value])=>{
            s.push([key,value])
        })
        console.log(s)
    }, function (error) {
    console.log("Error: " + error.code);
    });
    res.send(s);

})

module.exports = route