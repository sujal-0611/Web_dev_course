//functions 
//2 ways to write functions

//1. syntax of function defination: function function_name(arg1,arg2){ statements}
//examples:
function func1(){
    console.log("invoked function without formal parameters");
}

function func2(a,b){
    console.log("with parameters a: "+a+" b: "+b); 
}

//function calls
func1(); //invoke without parameter
func2("hello", "sujal"); //invoke with parameter



//**anonymous functions :A function expression .It is a function that is not pre-loaded into the execution context, and only runs when the code encounters it. we cannot call these functions before declaring them.
//syntax : const identifier = function (arg1,arg2){ }  //here anonymous function is actually assigned to 'identifier'
const add=function(x ,y) {
    return x+ y;
}
console.log(add(2,5)); 

//2. Arrow functions - a type of Anonymous functions written with fat-arrow(=>)
//syntax: const/let/var identifier = (arg1,arg2) => { statements }      //also const/let/var are optional
//ex1:
add2 =(x,y) =>{
    return x+y;
}
console.log(add(4,5)); 

//ex2:
const multiply=(x)=>{
    return x*3;
}   
console.log(multiply(4));

//also**   curly brackets({}) and 'return' can be omitted i.e:
const multiply2=(x)=> x*3;  
console.log(multiply2(4));

const multiply3 = (x,y) => x*y;  
console.log(multiply3(4,6));

//also ** if there is only one argument(parameter) then paranthesis can be ommited as well
const square = x => x * x ;
console.log(square(9));

//parenthesis is required if there;s no argument
const print=()=> console.log("hello");
print();