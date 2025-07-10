// const score = 100
// console.log(score); // will output 100

// const newScore = new Number(100)
// console.log(newScore); // will output as indicating the number
// console.log(newScore.toFixed(2)); // .00 will come
// console.log(newScore.toString()); // convert to string

// const valueOne = new Number(123.897)
// console.log(valueOne.toPrecision()); // will output as a string//use in ecomers app
// console.log(valueOne.toPrecision().length); // now we can apply rules of strings


// const hundreads = 1000000
// console.log(hundreads.toLocaleString()); // usa system
// console.log(hundreads.toLocaleString("en-IN")); //indian system

//++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++

// console.log(Math); //object
// console.log(Math.round(4.6));
// console.log(Math.abs(-4)); // only -ve value changes to +ve
// console.log(Math.ceil(4.3)); // always go to top
// console.log(Math.floor(4.9)); // always go to bottom

// mostly used is random ("its value lies between 0 and 1")

// console.log(Math.random());
// console.log(Math.random()*10); // to shift the decimal
// console.log((Math.random()*10)+1); //not to get 0,so we added 1 
// console.log(Math.floor((Math.random()*10)+1)); // lowest value lega



// trick 
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min); // values btw 10 to 20 will come