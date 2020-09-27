setTimeout(function(){
    console.log('Function is running');
},2000);

let id = setInterval(function(){
    console.log('Gfunction is running')
},1000);

setTimeout(function(){
    clearInterval(id);
},5000);

console.log(id);