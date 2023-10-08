let str = `my name is anthony`;
let str2=`sujal`;
console.log(str +`\n`);

console.log(str.length +`\n`);
console.log(str.toUpperCase() +`\n`);

//concatenate
console.log(str.concat(" and "+str2+ " is my friend"));

//str.includes(str2) - to check if str2 is in str , return boolean value
let word = `name`;
console.log(`${word} ${str.includes(word) ? `is` :`is not`} in the sentence: ${str}`);

//prinitng string with 4th character replaced with 'w' (only pprinting as str4 is immutable)
let str4 = `deepika is asshole`;
console.log(str4.replace(str4[3],`w`));