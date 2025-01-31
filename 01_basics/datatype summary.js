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
        // non-primitive always typeof objectfunction    