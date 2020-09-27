let a = {
    k:1,
    l:'Hello',
    m:true,
    n:[1,2,3]
}

let b = Object.create(a);
let c = Object.create(b);

// b.n[3]=30;
b.n = a.n.join(',').split(',');
console.log(a);
console.log(b);
console.log(c);

b.k++;

if(b.hasOwnProperty('k')){
    console.log('B has k');
    
}
else{
    console.log('B does not have k');
}

function f(){
    // console.log('Hello');
    return 1;
}

let n = Number('F');
console.log(n);

n=Boolean(10);
console.log(n);