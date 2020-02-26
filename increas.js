function dec(num)
{
    if(num==0)
    {
        return;
    }console.log(num);
    dec(num-1);
}
dec(5);
function inc(num)
{
    if(num==6)
    {
        return;
    }console.log(num);
    
    inc(num+1);

}

inc(1);