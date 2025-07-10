/* singleton is not generated when we use literals method of creating 
Objects .... if we use dot(.)/constractor we will generate the singleton*/


// Object.create   => constructor

// literals method
// jsUser = {
//     name: "Abhinav",      // vvvi  name/(keys) is actually presented as string to the computer
//     age : 18, 
//     email : "abhinavspl@google.com",    
//     address : "BIHAR"
// }
// console.log(jsUser);

// if we want to access any key we use two methods

// console.log(jsUser.email);  // nounsence method
// console.log(jsUser["email"]); // best
/*   we are using the second method becz if we HANDLE WITH SYMBOLS 
we have to see this is a very important interview question   */


const mySym = Symbol("key1")
const jsUser1 = {
    name : "Ronak",
    age : 20,
    email : "ronak25jan@gmail.com",
    [mySym] : "mykey1"
}
// console.log(jsUser1[mySym]);
// console.log(typeof jsUser1[mySym]); // now this is symbol representation

// jsUser1.email = "javascript@gmail.com"
// console.log(jsUser1) // override the previous value

// if we don't want to change the value , simply freez it

// Object.freeze(jsUser1)
// jsUser1.email = "yo@gmail.com"
// console.log(jsUser1);


/*  if we freez the object and than define the function we will
get an error. so, i am commenting out the above freez statements */

jsUser1.greetings = function(){
    console.log("hello Abhinav");
}
// console.log(jsUser1.greetings);  
console.log(jsUser1.greetings()); // 1 baar chala khud se .. function hai to () use karo
// undefined is browser things