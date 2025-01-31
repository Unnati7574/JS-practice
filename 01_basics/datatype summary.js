// primitive data type 


/* 7 type : string
            number
            boolean
            bigint
            null
            undefined 
            symbol */

            const str = "hello unnati 029"
            console.log(str);
            
            
            const score = 100  //number
            // console.log(score);
            const scorevalue = 100.6  //number
            
            const isLoggedin = false  //boolean
            const outsideTemplate = null   //null
            
            let userEmail;   //undefined
            
            const id = Symbol('123')    //symbol
            
            const anotherid = Symbol('123')
            
            console.log(id == anotherid);
            
            const bigNumber = 678945677894444444444444444444444444444444444444444444444442346789567n     //simplywrite n
            console.log(typeof bigNumber);
            
            
            
            
            
            /* non-primitive reference type : Array
                                              Objects    // you can master object
                                              Functions  */
            
            const favFruits = ["apple", "strowberrey", "pineapple"];   //Array
            
            const myObject ={
                name: "unnati",                 //object
                age: 25,
            }
            
            const myFunction = function(){
                console.log("hello world"); 
            }
            
            
            // non primitive typeof always returns object
            
            /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
            
            // stack and heap memory
            
            // stack(primitive) Heap(non-primitive)reference.
            
            let myfirstName = "unnati"         // in stack only change copy value not original value like "unnati".
            
            let mysecondname = myfirstName     
            
            mysecondname = "patel"               // second name change
            
            console.log(myfirstName);
            
            console.log(mysecondname);
            
            
            
            // heap memory : reference change value change means all variable value change   
            
            //you change user1.email heap memory also change user2.email
            
            let user1 = {
                email:"unnu@gmail.com",
                upi:"unnati@upl"
            }
            let user2 = user1;                  // reference copy of user1 in user2
            
            user2.email = "unnati@gmail.com";    // change in user2
            
            console.log(user1.email);            // change in user1 also
            console.log(user2.email);
            
            
            