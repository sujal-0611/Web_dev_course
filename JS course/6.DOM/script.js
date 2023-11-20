/*
//firstChild,lastChild,childNodes counts text nodes as well
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
console.log(document.body.childNodes[0]);   //accessing first child

let a = document.body.firstChild; //getting div
let b = a.parentNode;   //storing  parent node of div
let c = a.parentElement;    //storing parent element of div

//for now both gonna show "body"
console.log(b);    
console.log(c);
//the difference btwn parentNode and parentElement is parentnode will return any kind of node i.e it can even return text nodes or comment nodes.
//but parentElement will return only parent html element 


console.log(a.previousSibling); 
console.log(a.nextSibling);
console.log(a.previousElementSibling);
console.log(a.nextElementSibling);
*/


// accessing html table in JS
let t = document.body.firstElementChild   //getting table
console.log(t);
console.log(t.rows);    //all rows
console.log(t.rows[0]); //FIRST ROW
console.log(t.rows[0].rowIndex);    
console.log(t.rows[0].cells);    
console.log(t.rows[0].cellIndex);    
console.log(t.caption);
console.log(t.tHead.firstElementChild);
 console.log(t.tBodies);
// console.log(t.rows);
// console.log(t.Foot);
// console.log(t.bod);