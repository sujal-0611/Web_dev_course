//map() - create new array and call function for each array element
//similar to forEach but the difference is forEach work on exisiting array and map work by creating new array
//since map create a new array map returns that new array as well
//SYNTAX : aray_name.map(function_name = (current_ele , index , array_name) = > { operations});
let arr = [1,2,4,6,4];
console.log(`original array : ${arr}`);

let new_arr = arr.map((element) => {
                console.log(element);
                return element*3;   //i,e make every element in new array 3 times of existing array
            });
console.log(`new array : ${new_arr}`);


//filter() - return elements if only they satisfy conditions i.e filter out elements . Creates a new array and store filtered elements
//SYNTAX- arr_name.filter( (current_ele , index, array_name) =>{ conditions });
 //ex:
 let arr2 = [1,2,7,10, 8, 34, 56, 2, 67];
 let filtered_arr = arr2.filter((element) => {
                        return element > 10;    //i.e return elements that are greater than 10
                    });
console.log(`\nFiltered array: ${filtered_arr}`);


//reduce() -  reduces the whole array to single value and that can be done by perfroming any opreations like add, subtract etc
//syntax - arr.reduce( (element1, element2) =>{ result})
// **result is then carried over to element1 and element2 would have next element from array
//ex:
let arr3 = [1,2,5,4,8,6];
let new_arr3= arr3.reduce((total ,element2) =>{
    let result= total+element2 ;     // i.e add all numbers together
    return result;
    //now result is sent to total and element 2 would have next element
    //dry run: for first call toal=1 and element2=2 now result = 3 and result is sent to total , so now total=3 and element2 = 5 
});
console.log(`\nreduced to(addition) : ${new_arr3}`);