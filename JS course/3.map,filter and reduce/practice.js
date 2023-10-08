//chapter-5
const prompt = require("prompt-sync")({sigint:true});
//q1
let arr = [1,2,3,4,5];
console.log(`original array: ${arr}`);
let num = prompt("ennter the number: ");
arr.push(num);
console.log(`\nafter pushing ${num} the array is: ${arr}`);


//q2
let arr2 = [1,2,5,7];
let num2;

do{
    num2=prompt('enter a number: ');
    arr2.push(num2);
    
    num2 = Number.parseInt(num2);
}while(num2 !=0);
console.log(`\nsecond array is : ${arr2}`);


//q3
let arr3 =[1,10, 23, 34, 20, 100, 200];

let new_arr3 =arr3.filter((element) =>{
    return (element%10==0);
});
console.log(new_arr3);


//q5
let arr4=[1,2,3,4,5];
let new_arr4 = arr4.reduce( (ele1 , ele2) =>{
    return ele1*ele2;
});
console.log(`\nfactorial of ${arr4.length} is ${new_arr4}`);

