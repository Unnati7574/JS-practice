// object declare-> litler or constractor 

//singleton      constactor -> one object

// literals -> no singleton
// constructor -> singleton

// object literals

// const JsUser = {}    // This two are declare object
// object.create                  // constractor method

const mySym = Symbol("key1")

const JsUser = {
    name: "unnati",
    "full name": "unnati patel",
    [mySym] : "mykey1",                  //use correct symbol 
    age1to25: 25,
    location:"dharampur",
    email: "unnatip323@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"] 
}

//IMP

// mdn js data type structure  symbol

// console.log(JsUser);
 console.log(JsUser.email);     //access email

console.log(JsUser["email"]);       // access otherway Jsuser[] use "" bcoz in object it it like string

// console.log(JsUser.full name);  // this way wrong bcoz it is not a valid variable name
 console.log(JsUser["full name"]);   // use this way to access full name


console.log(JsUser[mySym]);

//  object value change

JsUser.email = "unnnati@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "unnnati222@gmail.com"  
console.log(JsUser);  


// greeting add
JsUser.greeting = function(){
    console.log("Hello js user");
    
}
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){                   //{this.name} same object reference see object property
    console.log(`Hello js user, ${this.name}`);   //string to backtic `` bcoz string enterpulation
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






 