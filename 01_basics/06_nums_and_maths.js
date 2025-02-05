
// -------------Numbers----------------------------

const score = 500
console.log(score);

const balance = new Number(1200)
console.log(balance);
console.log(balance.toString().length);

console.log(balance.toFixed(2))  // used in app like 100.00

const othernumber = 456.8789
console.log(othernumber.toPrecision(3));  //precision on number

const hundred = 100000
console.log(hundred.toLocaleString('en-IN'));

/* -----------Maths----------------*/
// console inspect so many property
console.log(Math);

console.log(Math.abs(-4));  // convert negative to positive
console.log(Math.round(4.9));  //5
console.log(Math.ceil(4.2));  // always select top value here u right 4.1 or 4.9 it convert bigger than 4
console.log(Math.floor(4.2));  //lowest value
console.log(Math.pow(2, 3));  // 8
console.log(Math.sqrt(16));  // 4
console.log(Math.max(1, 2, 3, 4, 5,6));

//console.log(Math.random());  // 0 to 1 value always
//range to range value
console.log(Math.random()*10 +1);   //   min value 1 ,+1

// set value *10 is going on
console.log((Math.random()*10) + 1);  // min = 1 not zero
console.log(Math.floor(Math.random()*10) +1);  // use floor to get sort value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) ;   // min 10 max 20

//math randome 0 to 1
//*10 sift left
//min value 1 => +1
//range min to max +1 bcoze min value 1
// add min 







