// function addTwoNumbers(num1 , num2) {
//     console.log(num1 + num2);
// }
// addTwoNumbers() // here no aurguments given hence it will give NaN
// addTwoNumbers(2, 4) // we will get 6 as an output
// addTwoNumbers(2 , "4") // it will give 24
// addTwoNumbers(3,null) // output will be 3
// addTwoNumbers(4,"a") // output will be 4a
/* so basically we don't check the condition of wheather the number
given by the user or by manually is really a number or not */
/* we will use if else conditions to check wheather the value is the
 number or not */ 
  

// num1 and num2 are called parameters and for calling the function we give them arguments



//*****************************************************
// CONCEPT 

/* if we are writing the console.log inside the function it is just 
printing the value which is inside the console not the function value,
so to determine the value of result of the function we have to 
declare a variable inside the function and the console.log outside the 
function. for Example */

// technique one

// function addTwoNumbers(num1 , num2) {
//     console.log(num1 + num2);
// }
// const result1 = addTwoNumbers(3,5)  // just showing the console value(undefined)
// console.log(result1);

// technique two

// function addTwoNumbers(num1 , num2) {
//     let result = num1 + num2
//     return result
// }
// const result = addTwoNumbers(3,5)
// console.log("Result:", result); 
/* This will give the value of function */

// a very important point is nothing will happen to the code 
// written after the (result)


// technique 3

// function addTwoNumbers(num1 , num2) {
//     return num1 + num2
// }
// const result2 = addTwoNumbers(3,5)
// console.log("Result:", result2); 


// technique 4

// function loginUser(username) {
//     return `${username} is just logged in`
// }
// loginUser("Abhinav")  // here function is giving the output but not printing

// to print the output value of this function we have to use console.log
// console.log(loginUser("Abhinav")) // now we will see the output


/*  but if we put an empty string than nothing will print except "is logged in"
 so, we will make some if statements to function is properly */


//  function loginUser1(username) {
//     if(username === undefined){
//         console.log("Please enter the Username");
//     }
//     else{
//         return `${username} is just logged in`;
//     }
// }
// console.log(loginUser1())
// here we will see two output (1 is from return and 2 is from console)


/* now i want to not show the return value. so, i will introduce a new return
inside the if statement above the last return */ 

// function loginUser2(username) {
//     if(username === undefined){
//         console.log("Please enter the Username");
//         return 
//     }
// }
// console.log(loginUser2()) // recheck with yt


/* here we will see some short code method to save our time 
As we know === is purely checking method and if statement will process only
when it is true
in javascript , undefined and empty string is treated as false
and we know about ! this is changing its value to true when this is false and
vice- versa & output will be same as previous */

// function loginUser1(username) {
//     if(!username){
//         console.log("Please enter the Username");
//     }
//     else{
//         return `${username} is just logged in`
//     }
// }
// console.log(loginUser1())



// ++++++++++++++++ more about functions (ecomers website)
// user is adding the items in cart and we have to calculate the total price

// function totalPrice(totalsum){
//     return totalsum
// }
// console.log(totalPrice(20,30)); // will just give first value 20 

/* to write all the value as output we have to use rest operator(...)
this is same as spread operator this will output as array */

// function totalPrice1(...totalsum1){
//     return totalsum1
// }
// console.log(totalPrice1(20,30)) // will give arrays of arguments


/* sometimes we also write something like this */

// function totalPrice2(var1,var2, ...total){
//     return total
// }
// console.log(totalPrice2(20,30,60)) 
/* first two values becomes var1 , var2
respectively and the last value will be shown as output because it is mentioned in 
return */ 



//++++++++++++++++ how to pass object in functions ++++++++++++++++

// const testing = {
//     username: "Abhinav",
//     branch: "EE"
// }
// function electrical(anyuser){
//     console.log (`${anyuser.username} belongs to branch ${anyuser.branch}`)
// }
// (electrical(testing));
// we make a generalise function then putting the value of desire object
// make a mistake by writing branches in place of branch and see the difference


// we can also directly pass the object
// electrical({
//     username : "Anand",
//     branch: "ee"
// })


/* we can do this same for the arrays */

// const myArray = [100, 299 , 300]

// function testArray(anyArray){
//     return anyArray[2]// want 3rd element of array
// }
// console.log(testArray(myArray));

// OR just put array directly in function

// console.log(testArray([100,299,300]));