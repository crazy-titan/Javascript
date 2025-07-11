/* Global scope and local scope */

// Global meaning anything we define outside ie. let,var,const
/* local meaning anything we define inside a function and it will just \
end inside that particular function , if you try to console its value. it will
through ERROR*/

//NOTE

/* anything which is define inside the local scope will not come outside,
where as anything that is defined in global scope will come inside easily
without throwing ERROR */



function test(){
    let a = 3
    const x = "abhinav"     // local scope
    var b = c
}
// console.log(test(a));  // ERROR
// console.log(test(x));  // ERROR
// console.log(test(b));    // calling local scope outside the function (No ERROR)

// Take another example

// let t = 300
// function test1(){
//     let t = 10
//     console.log("INNER:",t);
// }
// console.log(test1("OUTER:",t));

/* scope in terminal are different than the scope in the browser console */
// child can steal the icecream from parents but vice-versa is not true
// any variable that is defined inside any scope must console inside it only
// if we try to console it outside the scope it will throw an error.



//++++++++++++++++++++++++++++++++++++//INTERTESTING

function addOne(num){
    return num + 1
}
console.log(addOne(5)); // this can be written below or above the function

const add = function addTwo(num){
    return num + 2
}
console.log(add(5)); // if You write this on top of const add, it will gives ERROR

// we can define the functions in two different ways