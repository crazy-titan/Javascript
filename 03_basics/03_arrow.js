/* this. is used in case of objects ONLY,  if we apply same like this.username
inside any function it will give an output of undefined */
const user = {
    username: "abhinav",
    price: 999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to our website.`); /* don't write 
        username like this when you are considering the current context/variable
        inside current parent scope 
        to include current context we use   this.  */
        

        // if we want to know the current context info we use console here inside the function scope.
        // console.log(this)
    }
}
user.welcomemessage() // context username is abhinav// output abhinav
user.username = "Ronak"
user.welcomemessage()  // context username is now Ronak//output Ronak

// console.log(this) 
/* VVI interview question 'this' is asking about current 
context here 'node' is the current context. output will be empty object{},
 but if we run this on any browser console it will give window{} as an output */

 
//  const hello = function(){
//     let username= "ok"
//     console.log(this.username);
//  }
//  hello() //undefined

// Arrow '=>'
// const hey = () =>{
//     let username = "hehe"
//     console.log(this.username) // undefined
//     console.log(this) // empty object {}
// }
// hey()// undefined

////+++++++++++++++++++++ARROW FUNCTIONS+++++++++++++++
////+++++++++++++++++++++++++++++++++++++++++++++++++++

// const add = () => {}  //syntax of arrow functions

//now do two num addition in Basic Arrow function method or explict method
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5));

//implicit return method
// const add2 = (num3,num4) => num3+num4
// console.log(add2(3,4));

//or we can also write in this way , very useful in react.js
// const adddo = (num5,num6) => (num5+num6) // use parenthasis
// console.log(adddo(6,2));


//notes
/* if we use curlly brackets, we have to write return. and if we want not to
write the curlly bracket, we will use small brackets both side to get used
of it show that it will be easy while learning react */


// if we want to get object as an output we will use paranthesis

// const c= ()=> {usr:"Abhinav"}
// console.log(c()); //undefined

// const d= ()=> ({user:"Abhinav"})
// console.log(d()); //object
