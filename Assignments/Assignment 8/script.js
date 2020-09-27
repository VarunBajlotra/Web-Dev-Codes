let obj =[];

function add(){
    let temp1=document.getElementById('name').value;
    document.getElementById('name').value="";
    let temp2=document.getElementById('age').value;
    document.getElementById('age').value="";
    console.log(temp2);
    let o={
        name: temp1,
        age: Number(temp2)
    };
    obj.push(o);
    document.getElementById('hidden').innerHTML += o.name+' '+o.age + "<br>";
    // console.log(obj);
}

// console.log(obj[0]);

var x = document.getElementById("name_s");

x.onclick = function(){
    for(let i=0;i<obj.length;i++){
        for(let j=0;j<obj.length-i-1;j++){
            if(obj[j].name>obj[j+1].name){
                let t=obj[j];
                obj[j]=obj[j+1];
                obj[j+1]=t;
            }
        }
    }
    var y = document.getElementById("hidden");
    y.innerHTML = "";
    for(let i=0;i<obj.length;i++){
        y.innerHTML += obj[i].name + ' ' + obj[i].age + "<br>";
    }
}

function sortage(){
    for(let i=0;i<obj.length;i++){
        for(let j=0;j<obj.length-i-1;j++){
            if(obj[j].age>obj[j+1].age){
                let t=obj[j];
                obj[j]=obj[j+1];
                obj[j+1]=t;
            }
        }
    }
    var y = document.getElementById("hidden");
    y.innerHTML = "";
    for(let i=0;i<obj.length;i++){
        y.innerHTML += obj[i].name + ' ' + obj[i].age + "<br>"
    }
}