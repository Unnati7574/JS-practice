// Array

const myArr = [ 0, 1, 2, 3, 4, 5]

//console.log(myArr[0]);

const rosecolor = ["red", "pink", "yellow", "blue"];
//console.log(rosecolor[3]);

const arr2 = new Array(1,2,3,4);
//onsole.log(myArr[0]);

//----------Array Methods---------------


// myArr.push(6)          //method push
// myArr.push(7)           // add element 6,7
// myArr.pop()            // remove last element

//myArr.unshift(9)        //insert in starting array problem array value are shifted
//myArr.shift()             // remove the first element of the array 
// console.log(myArr.includes(9));     //result judge data types
// console.log(myArr.indexOf(3));      //in array 3 is in  3rd index.

const newarr = myArr.join()     //join - bind array - convert string

// console.log(myArr);
// console.log(typeof newarr); 


// Slice, Splice

console.log("A", myArr);

const myar1 = myArr.slice(1, 3)
console.log(myar1);

console.log("B", myArr);



const myar2 = myArr.splice(1,2)
console.log("C", myArr);

console.log(myar2);

//NOTE:  in array Slice cant change array
// splice change be original array
  