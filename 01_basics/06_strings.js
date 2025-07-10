const name = "Abhinav"
const age = 20
// console.log(name + age + " any string"); // old method not inuse now

// new method(ongoing upercase lowercase kar sakte nd etc)
// console.log(`My name is ${name} and my age is ${age}`);


// handling the strings
// we can also write string as
// const gameName = new String("abhinav-anand-007")
// console.log(gameName.charAt(2)); //give the char of that place
// console.log(gameName.indexOf('h'));//give the index of h
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName[0]); //getting character at index 0 
// console.log(gameName.__proto__); // object


//this will not take any -ve value,if u give -ve it will ignore
//and statrs with 0
// const newString = gameName.substring(0,4)
// console.log(newString);

// this will take -ve value
// const otherString = gameName.slice(-6,4)  //recheck from yt
// console.log(otherString);

// //some new methods
// const newInGame = "    abhinav    "
// console.log(newInGame);
// console.log(newInGame.trim()); // will remove extra space btwen l and r side


// replace method & also we can ask question by using include method
// const url = "https://abhinav.com/abhinav20%anand"
// console.log(url.replace("20%","-"));
// console.log(url.includes("abhinav")); // gives true or false 
// console.log(gameName.split("-")); // will convert into array ,eg is above