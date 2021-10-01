// function f(){
//     return 1;
// }

// f.k=10;
// console.log(f.k);
// console.log(f());

function Person(name,age){
    // this.age=age;
    this.name=name;
    this.getFirstName = ()=>{
        return this.name.split(' ')[0];
    }
    this.isAdult = ()=>{
        return age>=18;
    }
    this.updateFirstName = (firstName)=>{
        let temp = this.name.split(' ');
        temp[0]=firstName;
        this.name = temp.join(' ');
    }
}

Person.staticFun = Person.prototype.staticFun = function(){
    console.log('This is static');
}

let p = new Person('Harry Potter',18);
let p1 = new Person('Ron Weasley',17);

let f = ()=>{
    console.log(this);
}

let a = new f();

let o = {
    k:1,
    l:function(){
        return this;
    }
}

let x = Person.bind(o);
// x();

// let p = new Person();

console.log(o.l());
Person('Harry Potter',18);
console.log(this);
console.log(this == window);
