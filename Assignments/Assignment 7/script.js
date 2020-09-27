function cal(){
    let temp = document.getElementById('input').value;
    let r=0, p=0, n=0;
    temp = temp.split(' ');
    console.log(temp);
    for(let i=0;i<temp.length;i++){
        r+=Math.pow(temp[i],2);
        if(temp[i]<0){
            n+=Math.pow(temp[i],2);
        }
        if(temp[i]>0){
            p+=Math.pow(temp[i],2);
        }
    }
    r=r/temp.length
    p=p/temp.length
    n=n/temp.length
    r=Math.sqrt(r);
    p=Math.sqrt(p);
    n=Math.sqrt(n);
    
    document.getElementById('rms').innerHTML=r;
    document.getElementById('prms').innerHTML=p;
    document.getElementById('nrms').innerHTML=n;
}
