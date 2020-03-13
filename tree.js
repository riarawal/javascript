//code to display as tree
//use require
let fs=require("fs");
let path=require("path");
//fxn
function displayTree(indent,src)
{
    let ans=fs.lstatSync(src).isDirectory();

    if(ans==false)
{ console.log(indent+path.basename(src)+"*");

    //console.log("i m file");
    
}
   else{
    //console.log("i m directory");
    console.log(indent+path.basename(src));
    
//to get children from dir. i.e.display content
let children=fs.readdirSync(src);
for (let i=0;i<children.length;i++)
{
    let cPath=path.join(src,children[i]);
    displayTree(indent+" ",cPath)
}
}}
let indent=" "
displayTree(indent,".\\src\\d10")
