//const tinderUser = new Object()  // single ton object

const tinderUser = {}   /// non singleton object


tinderUser.id = "1234av"
tinderUser.name = "summy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "someee@gmail.com",
    fullname: {
        userfullname:{
            firstname:"myname",
            lastname:"patel"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//func