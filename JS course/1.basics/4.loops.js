//loops
const prompt = require("prompt-sync")({sigint:true});
/*
//for loop
for(let i=0; i<10;i++){
    console.log(i + " ");
}

//some variants of for loop : for-in and for-of
//***difference is for-in works for both objects and iterables(like:arrays)
//while for-of works for iterables(arrays) only
const obj = {
    sujal : 97,
    arjun: 87,
    yash : 90,
    aman : 67
}

//1. for-in loop
//here 'a' is key and 'obj[a]' is value
for(let a in obj){
    console.log("name: "+ a + " marks: "+obj[a] );
}

//2. for-of loop
//  wont run!!!
//for(let a of obj){
   //console.log("name: "+ a + " marks: "+obj[a] );
//}

let arr = [1,2,4,5,7];
for (let a of arr) {
    console.log(a);  
}

*/

console.log("while loop");
//while loop
let a =prompt("enter a number");
a= Number.parseInt(a);

let i=0;
while(i<a){
    console.log(i);
    i++;
}

console.log("do-while loop");
//do-while loop
i=0;
do {
    console.log(i);
    i++
} while (i<a);

