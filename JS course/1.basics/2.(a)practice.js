//Practice SET

//add a number to string
let a = "sujal";
let b=3;
let c = a+b;

console.log(c);

//find data type of result
console.log(typeof(c));

//objects here are key value pairs
const obj = {
    name : "sujal",
    class : 12
}
console.log(obj);


//we can update , create a new key in object that is referenced by a constant
//   key         value
obj['roll_no'] = 26;

console.log(obj); 

//way to access particular key in object
//2 ways
//1. syntax: object_name['key_name'] or object_name["key_name"] 
console.log("name" + ":" + obj['name']); 

//2. syntax: object_name.key_name
console.log("name" + ":" + obj.name);
