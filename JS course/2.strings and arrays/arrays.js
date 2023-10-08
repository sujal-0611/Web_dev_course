//arrays
//collection of items that can be accessed randomly using their index numbers

//can store more than one value
let arr = [1,2, `sujal` , 2.2];

let size = arr.length;
console.log(size);

//now array have 4 elements i,e from index 0 to index 3 , if we try to print arr[4] rather than giving error it will print 'undefined'
console.log(arr[4]);

//we can enter a new item in the end  in array simply by assigning a new item to index  that is after last index
//here index 3 is last so 
arr[4] = `new_item`;
console.log(`after adding an element at end : ${arr}`);


//convert to string 
let num = [1,2,3,4,5];
let b= num.toString() ; //converts array into a string
console.log(b, typeof(b));

//join() - join all array elements using separator provided ny user
let c = num.join(" ~ ");
console.log(c);

//delete - its operator not function
let d = [1,2,4,5,6];
console.log(d);
console.log(d.length+ `\n`);
delete d[0];
console.log(d);
console.log(d.length+ `\n`);

//sort - it sorts the array alphabetically i.e 12,22,,29, 74,7,1 3 will be sorted as 1, 12 , 22, 29 ,3 , 7, 74  (one , two , three .... order)
let e = [54,78,12,9,44,835,67,1,7,2];
console.log(e +`\n`);
e.sort();
console.log(e);

//to fix this we use compare function
let compare = (a,b) => {
    return a-b;
    //for descending order
    //return b-a;
}
e.sort(compare);    // now sort() sorts the array properly
console.log(e);


//splice() - way to insert elements in array and also delete the elements
//syntax : arr_object.splice(starting_index , no_of_elements_tobe_deleted , new elements);
let f = [56,3,8,23,7,8,2];
f.splice(2,3,1001,1003,1004,1005,1006);
//2-starting index , 3-no of elements form starting index to be deleted , [1001,1003,1004,1005,1006]- new elements to be added from starting index
console.log(`using splice(): ${f}`);
//also* splice() returns object containing all the elements it had deleted
let deleted_elements = f.splice(2,3,2001,2002,2003,2005);
console.log(deleted_elements);  //prints deleted items


 //forEach Loop  - calls a function for each element in an array i.e another way to traverse array
 //syntax : arr_obj.forEach(function_name = (current_item , index , array_name) =>{ 
//              operations   });
 //ex1:
 let g=[1,2,"hello",true,[1,2]];
 console.log(`\nEx1: printing array elements`)
 let funcky=(element)=>{
    console.log(element);
 }
 g.forEach(funcky);

 //ex2: writing ex1 in another way i.e writing function defination at function call
 console.log(`\nEx2: printing array elements`)
 g.forEach(funcky2 = (element) => {
    console.log(element);
 });

 //ex3: without naming function
 console.log(`\nEx3: printing array elements`)
 g.forEach((element)=>
 {
   console.log(`${element}`)
 });
 //Array.from() - method to convert any iterable object to an array
 let str = `sujal`;
 let h = Array.from(str);
 console.log(h);
 