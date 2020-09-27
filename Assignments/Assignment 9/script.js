function generate(){
    let temp = document.getElementById('number').value;
    for(let i=1;i<=temp;i++){
        if(i%15==0){
            document.getElementById('hidden').append("FizzBuzz ");
        }
        else if(i%3==0){
            document.getElementById('hidden').append("Fizz ");
        }
        else if(i%5==0){
            document.getElementById('hidden').append("Buzz ");
        }
        else{
            document.getElementById('hidden').append(i+' ');
        }
    }
}