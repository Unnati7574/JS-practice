
/* conversion operators => like variable are
                                             number, string, boolean ?  */




                                             let score= "33abf"  // number is NaN => not a number

                                             console.log(typeof score);
                                             
                                             console.log(typeof (score));
                                             
                                             let valueIsNumber = Number(score)                   //Number =>  any number, null, undefined
                                             console.log(valueIsNumber); 
                                             console.log(typeof valueIsNumber);
                                             
                                             
                                             
                                             let score1= null  // zero 
                                             
                                             // console.log(typeof score1);
                                             
                                             // console.log(typeof (score1));
                                             
                                             let valueAreNumber = Number(score1) 
                                             // console.log(typeof valueAreNumber);
                                             // console.log(valueAreNumber); 
                                             
                                             
                                             let score2= undefined                       // let score = true -> value is 1
                                             
                                             // console.log(typeof score2);
                                             
                                             // console.log(typeof (score2));
                                             
                                             let valueIsNumbers = Number(score2)
                                             // console.log(typeof valueIsNumbers);
                                             // console.log(valueIsNumbers); 
                                             
                                             
                                             // 33 => 33
                                             // "33abs" => NaN
                                             // null => 0
                                             // undefined => NaN
                                             // true => 1; false =>0
                                             
                                             
                                             let logInnumber = 1                   // Define a function to demonstrate conversion operators
                                             
                                             
                                             let logInnumberboolean = Boolean(logInnumber)                 // boolean => true or false if 1 or 0
                                             
                                             console.log( logInnumberboolean);
                                             
                                             console.log(typeof logInnumberboolean);   
                                             
                                             
                                             // 1 => true 0 => false    // if we conver this
                                             //  "" => flase
                                             // "unnati" => true
                                             
                                             
                                             let numberisString = 1    // Define a function to demonstrate conversion operators
                                             
                                             let numberisStringboolean = Boolean(numberisString)                 // boolean => true or false if 1
                                             
                                             console.log(numberisStringboolean);
                                             console.log(typeof numberisStringboolean);
                                             
                                             
                                             let someString = 33
                                             let someStringIs = String(someString)
                                             console.log(someStringIs);
                                             console.log(typeof someStringIs);
                                             
                                             
                                             
                                             
                                             //  ex   object array
                                             

//  ex   object array

/*************************************** operation **********************************************/

let value = 3

let negValue = -value 
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(4**2);   // 4*2=8 8*3=16
console.log(6/3);
console.log(23%3); // 23 divide 3 => see reminder in below

let str1 = "hello"
let str2 = "    unnati"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);  //  when we write first string value it will convert all are string
console.log(1 + 2 + "2");  // but when we write first number value it will addition the string value print

console.log((3+4)*5 % 3); 


// console.log(+true);
// console.log(+"");


let gameCounter = 100
gameCounter++
console.log(gameCounter);



let gameCounteris = 100
++gameCounteris
console.log(gameCounteris);



                                             
                                             
                                             
                                             
                                             
                                             
                                             