// dates

let myDate = new Date()
console.log(myDate);

// console.log(typeof myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

let mycreatedDate = new Date(2025, 0, 5);   // month start frome zero january
console.log(mycreatedDate.toDateString());  


let mycreatedDate1 = new Date(2025, 0, 5, 5, 3);  // time
console.log(mycreatedDate1.toLocaleString());


let mycreatedDate2 = new Date("2025-02-15");
console.log(mycreatedDate2.toLocaleString()); 


let mycreatedDate3 = new Date("01-29-2025");
console.log(mycreatedDate3.toLocaleString());


// time stampt

let myTimeStamp = Date.now()

console.log(myTimeStamp);   // mili second value

// hotel room time comparision

console.log(mycreatedDate3.getTime());

// convert in seconds

console.log(Date.now()/1000);  // decimal value

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // get month get time

console.log(newDate.getDay());  // get date get time


// full time

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    timeZone: 'UTC'
})