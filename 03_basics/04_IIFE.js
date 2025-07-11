/* due to various declerations in global scope, it may laid to pollute the
block scope. so, to clear this pollution we use IIFE
(Immediately Invoked Function Expressions) */

// syntax is double paranthesis just like previous arrow function
// first () is decleration and second () is to run the decleration

(function hehe(){
    console.log("hello World");     //example of Named IIFE
})();

// now apply same on arrow function(VVI)

(() => {
    console.log("hello");     
})();

/* NOTE */
/* if we use in arrow function just after using it on function, it will
throw an error. Because, you should use the semi-CloseEvent(;) to end it first in function before using same in arrow functions */


// we can also pass variable here
((name) => {
    console.log(`hello ${name}`);       //example of unnamed IIFE 
})("Abhi")
