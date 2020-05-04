let arr=[2,6,8,10,17,28,40,46,50,68];

function map11(arr,ov)
{
    for(let i=0;i<arr.length;i++)
    {
       arr[i]=ov(arr[i]);
    }
}
function ov(ele)
{
    if(ele%2==0)
    return ele+1;
    else
    return ele-1;
}
let myarr=[];
function map12(arr,prime)
{
    for(let i=0;i<arr.length;i++)
    { if(prime(arr[i])!=false)
       myarr.push(prime(arr[i]));
    }
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
map11(arr,ov);
map12(arr,prime);
console.log(myarr);


