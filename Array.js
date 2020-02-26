let arr=[2,6,17,28,46,68];

const map1 = arr.map(function(ele){
    if(ele%2==0)
        return ele+1;
    else
        return ele-1;
})
console.log(map1);
const prime = map1.filter(function pr(num){
    var f=0;
    for(let i=2;i*i<=num;i++)
    {
        if(num%i==0)
        {
         f=1;
        }
    }
    if(f==0){
        return num;
    }
});

console.log(prime);


