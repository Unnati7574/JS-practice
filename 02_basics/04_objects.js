//const tinderUser = new Object()  // single ton object

const tinderUser = {}; /// non singleton object

tinderUser.id = "1234av";
tinderUser.name = "summy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "someee@gmail.com",
  fullname: {
    userfullname: {
      firstname: "myname",
      lastname: "patel",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

//fullname?.userfullname?...  api value

//assign() method

const obj1 = { 1: "one", 2: "two" };
const obj2 = { 3: "one", 4: "two" };

// const obj3 = {obj1, obj2}          // new object return

        // const obj3 = Object.assign({}, obj1, obj2);   //use{} empty object with source
// console.log(obj3);

//easy

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

//from database value  user ->>>>>>>>> IMP -> array of object

const users = [
  {
    id: 1,
    email: "uu@gmail.com",
  },
  {
    id: 1,
    email: "uu@gmail.com",
  },
  {
    id: 1,
    email: "uu@gmail.com",
  }
];

/*--------------this used in when in project database--------*/
//  loop trough array assign

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  //IMP  keys(?) 
//get all keys   which  datatype are in tinderuser?  -> array 

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser));  //keys-> values


//getting property keys
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


console.log(tinderUser.hasOwnProperty('contactno'));




//  NOTE:  deeply in object go mdn object assign 