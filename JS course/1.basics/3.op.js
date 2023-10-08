//installed promt-sync through npm and now making prompt run on node env
const prompt = require("prompt-sync")({sigint:true});

//prompt is not supported in node runtime env.
let a =prompt("enter anything: ")
console.log(a);
console.log(typeof a);

//switch
let b =prompt("enter a color: ");
switch(b){
    case "red": console.log("RED");
                break;
    case "blue": console.log("BLUE");
                    break;
    case "green": console.log("GREEN");     //if green is a choice then both GREEN AND YELLOW will be printed
    case "yellow": console.log("YELLOW");
                    break;
    case "pink" : console.log("PINK");
                break;
    default : console.log("WRONG COLOR");               
    
}

//ternary Operator
let c = prompt("enter a processor name ");
 
console.log( (c=="intel")? 'INTEL' : 'AMD');
