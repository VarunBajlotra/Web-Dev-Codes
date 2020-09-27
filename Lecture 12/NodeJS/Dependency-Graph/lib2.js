const lib1 = require('./lib1');
console.log('Running lib2');

let b=20;

function add(a,b){
    return a+b;
}

// module.exports.b = b;
// module.exports.lib1 = lib1;

// global.add = add;

module.exports = {
    b,add
}