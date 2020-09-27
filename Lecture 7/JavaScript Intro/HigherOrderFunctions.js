
function outerFun(anotherFun){
    console.log('This is outer fun '+ anotherFun());
}

function innerFun(){
    console.log('This is inner fun');
}

outerFun(innerFun);

// function outerFun(){
//     function newFun(){
//         console.log('This is new func');
//     }
//     console.log('This is outer func');
    
//     return newFun;
// }

// let fun = outerFun();
// fun();