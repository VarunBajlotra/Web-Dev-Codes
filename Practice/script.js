let ibox=document.getElementById('ibox')
let list=document.getElementById('box')

function func()
{
    let num=ibox.value;
    let str="";
    for(var i=1; i<=num;i++)
    {
        if(i%3==0 && i%5==0)
        {
            str=str+"FIZZ BUZZ"+"<br>"
        }
        else if(i%3==0)
        {
            str=str+'FIZZ'+"<br>"

        }
        else if(i%5==0)
        {
            str=str+'BUZZ'+"<br>"
        }
        else{
            str=str+i+"<br>"
        }
    }
    list.innerHTML+=str
}