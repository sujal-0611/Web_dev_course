//q1
let obj ={
    sujal:78,
    dhruv:67,
    arjun:89,
    aman:45
}

for(let i in obj){
    console.log("name: "+ i+" marks: "+obj[i]);
}

//long (old) way to solve the question
//i.e how to travese all keys of object
//syntax: ith key is: Object.keys(obj)[i]  and ith value: obj[ Object.keys(obj)[i] ]
for(let i=0; i< Object.keys(obj).length ; i++){
    console.log("name: "+  Object.keys(obj)[i] +" marks: "+obj[Object.keys(obj)[i]]);
}

//Q. write a function to return mean of 5 numbers
const mean = (a,b,c,d,e) => ((a+ b + c + d)/ e); 
console.log("mean :"+ mean(23,45,67,89,90));