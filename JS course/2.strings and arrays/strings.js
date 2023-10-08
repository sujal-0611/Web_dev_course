//strings
 let str ="hello i am sujal";
 console.log("using double quotes: "+ str);

 let str2 = 'hello i am sujal';
 console.log('using single quotes: '+ str2);

 //template literals - 3rd way  of defining strings using backticks (``)
 let str3 = `hello i am sujal`;
 console.log(`using backticks quotes: `+ str3);

 //using both double and single quote inside backticks
 let str4 = `hello "i" am 'sujal' sharma`;
 console.log(`using backsticks with mix of double and single quotes: `+ str4);// hello "i" am 'sujal' sharma

//**string interpolation
let name = `sujal`;
let str5 = `my name is ${name} sharma`;
console.log(`using string interpolation: `+ str5);