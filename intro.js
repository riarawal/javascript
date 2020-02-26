let num=2;
for(let i=2;i*i<=num;i++)
{
    if(num%i==0)
    {
        console.log("Not prime");
        return;
    }
}

console.log("prime");
