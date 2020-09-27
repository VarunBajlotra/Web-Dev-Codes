function Original(){
    console.log(this);
    function notOriginal(){
        console.log(this);
    }
    notOriginal();

}

Original();
let obj={
    k:1,
    getProp: function(){
        return this;
    },
    l:'Hello'

}

function f(x,y){
    console.log(this);
    console.log(x+y);
}




f.call(obj,10,20);
var s = f.bind(obj);

function Person(name,age){
    this.name=name; 
    this.age=age;
    console.log(this);
}

let p = new Person('Harry Potter',20);

console.log(obj.getProp());