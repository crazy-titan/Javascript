// const myObj = new Object()  // Object formatation 
// console.log(myObj) 

// const myObj1 = {}  // also an Object formatation

/// let put some value in this object

// myObj1.id = "123abc" // keys nd value
// myObj1.email = "anand@gmail.com"

// console.log(myObj1);

// we can also add keys and value in myObj2 by manually 

// const myObj2 = {
//     name: "Ronak",
//     address: "jaipur"
// }
// console.log(myObj2);

// we can add two Objects same as we have done in arrays

const obj = {1:"A" , 2:"B"}
const obj1 = {3:"A" , 4:"B"}

// const obj2 = {obj, obj1}
// console.log(obj2)
 /* here we can see in output same problem is showing
as we have seen in arrays section, that's why we are use other
method*/

// const obj4 = Object.assign( {}, obj, obj1 )
// console.log(obj4);
/* we have an empty target{} , were we will add the source obj , obj1*/

//////////////////////////////////
// But we will use the spread method as we have seen in arrays
// const obj5 = {...obj , ...obj1}
// console.log(obj5);
/* here no need of making an empty target */



// also we have nested object for example

const myUser = {
    userDetails : {
        userName:{
            firstname: "Abhinav",
            lastname: "Anand"
        }}
}

// now access every element of this object

// console.log(myUser.userDetails)
// console.log(myUser.userDetails.userName)
// console.log(myUser.userDetails.userName.firstname)


/* now lets see this interesting condition */

// console.log(Object.keys(myUser)) // output is the arrays of keys
// console.log(Object.entries(myUser)) // everything
// console.log(Object.values(myUser)) // output is the arrays of values

// for checking where that is present or not
// console.log(myUser.hasOwnProperty("userDetails")); // bolean values


/* if we have something from database it will be in arrays */
//  basically group of objects in an arrays

// const database = [
//     {id : 1,
//     email : "abhinavspl2003@gmail.com"},
//     {id : 1,
//     email : "abhinavspl2003@gmail.com"},  // id and emails will be different common sence , this is just an example 
//     {id : 1,
//     email : "abhinavspl2003@gmail.com"},
//     {id : 1,
//     email : "abhinavspl2003@gmail.com"}
// ]
// now access the objects 
// console.log(database[1].email); //.email is to access the elements in that object


/* some API discussion and di-structuring the objects */

// const heheOk = {
//     id: "1e4",
//     email: "abhinav@gmail.com",
//     courseName : "Btech",
//     courseCordinator : "Prashidh Trivedi"
// }
// heheOk.courseCordinator /* by this we can access the value 
// but this is time taking, so we do di-structuring here*/
// const {courseCordinator: httBKL} = heheOk
// console.log(httBKL);

//basically API is something if you want to perform some work by someone