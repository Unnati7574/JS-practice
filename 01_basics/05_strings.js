const name= "unnati"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`my nam is ${name} and my repo count is ${repoCount}`);   //backtick symbol `` above tab.


// string declaration
const gameName = new String('unn-ati') 

console.log(gameName[0]);  // see key value pair of variable
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());  // the variable change uppercase only in stack memory
// stack memory change only who has the last changes variable

console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

// here  slice :add new variable // then substring notice 5 no. not include in string.

const mySting = gameName.substring(0, 5); //it not posible with negative value.

console.log(mySting);

const anothervar = gameName.slice(-5 , 6);  //it possible with negative value.
console.log(anothervar);


const str = "   string trim  " ; //remove all extra space(start-end space remove)

console.log(str);
console.log(str.trim());

const url = "http://unnati029website.com/saurabh";

console.log(url.replace('029', '29'));  // replace value:029, string:29

console.log(url.includes('unnati'));  //include, check keyword, true or false

console.log(url.includes('patel'));



console.log(gameName.split('-'))  // you can set any symbol and character.