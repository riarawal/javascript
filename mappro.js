let arr=[2,6,17,28,46,68];

Array.prototype.map11=function(ov)
{
    for(let i=0;i<this.length;i++)
    {
       this[i]=ov(this[i]);
    }
    return this;
}

function ov(ele)
{
    if(ele%2==0)
    return ele+1;
    else
    return ele-1;
}

Array.prototype.map12=function(prime)
{
    let myarr=[];
    for(let i=0;i<this.length;i++)
    { if(prime(this[i])!=false)
       myarr.push(prime(this[i]));
    }
    return myarr;
}
function prime(num)
{
    var f=0;
    for(let i=2;i*i<=num;i++)
    {
        if(num%i==0)
        {
         f=1;
         return false;
        }
    }
    if(f==0){
        return num;
    }
}

let s=arr.map11(ov);
let r=arr.map12(prime);

console.log(r);
console.log(s);


