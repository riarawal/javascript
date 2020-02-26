var {exec}=require("child_process")
const opn = require('opn');
function takeRequest(data,success,failure){
    if(data%2==0)
    {
        success();
    }
    else{
        failure();
    }
}
function success()
{
    console.log("completed");
    exec("calc");
    
}
function failure()
{
    console.log("not completed");
    opn('http://facebook.com', {app: ['Chrome']});
    
}

takeRequest(17,success,failure);
