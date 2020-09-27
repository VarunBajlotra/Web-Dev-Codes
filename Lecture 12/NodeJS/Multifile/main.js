let lib;
if(typeof window=='undefined'){
    lib = require('./lib.js');
    // console.log(temp.add(1,3));
}
else{
    // console.log(add(1,3));
    lib = window;
}

console.log(lib.add(10,20));