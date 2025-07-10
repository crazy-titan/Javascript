//  two types of datatypes

// primitive
  // # string number bigInt boolean null undefined symbol
  
const bigInt = 9883094972373n 

const id = Symbol("123")
const anotherId = Symbol("123")
// both are different but looking similar
console.log(id === anotherId); // gives false



// non-primitive

  // # Array,object and function

scoreCard = ["string", Number, Boolean, BigInt] //Array

let object = {
    name: "abhinav",
    age:20,
}     // Object

const myFunction = function(){
    console.log("hello world");

} //Function


//NOTE
/* output of any non-primitive is a function and output of a function 
is basically object-function*/



    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    //stack memory(for primitive) and heap(for non-primitive)


    //in stack if we asking the two values than if,
    // i change in one than it will change in its copy part ,not in original part
    
// let score = "Abhinav"
// let scoreTwo = score
// scoreTwo = "Anand"

// console.log(score);
// console.log(scoreTwo);     //both have different value



//in heap you will get the original reference everytime 
// so it will directly change the origunal value

let userOne = {
  email: "abhinav@google.com",
  upi: "id@ybl"
}
let userTwo = userOne;
userTwo.email = "user@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);

//both will show same output