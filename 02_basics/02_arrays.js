// Arrays can get any value 

const marvel_heros = ["spiderman", "ironman", "captain America"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // not looking good
// console.log(marvel_heros[3][1]); // superman 

// all_heros1 = marvel_heros.concat(dc_heros)  // new array 
// console.log(all_heros1);

// all_heros2 = [...marvel_heros, ...dc_heros]// spread method
// console.log(all_heros2); // 2nd method and widely use method


// run each console seperatly(above)


// const Array_x = [1,2,3,[1,2],4,5,[1,2,3,[3,4]]]
// const Array_y = Array_x.flat(Infinity)   // or u can give the depth
// console.log(Array_y);



// interesting
// console.log(Array.isArray("Abhinav"));//checking array or not
console.log(Array.from("Abhinav")); // make array from A,b,h,i,n,a,v
// console.log(Array.from({name:"Abhinav"})); // obj gives empty array


//
// let score = 100
// let score1 = 200
// let score2 = 300
// console.log(Array.of(score,score1,score2)); // will make the array of given score