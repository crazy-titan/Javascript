// use of forIn loops in objects and arrays for obtaining the keys and values
let myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python"
}
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
for (const key in myObject) {
    //console.log(key); // keys will get as an output
    //console.log(myObject[key]); // values 
}

// can we do this same on an array:? let's see
let arr = ["js","cpp","py","java"]
for (const key in arr) {
    //console.log(key); // arrays are objects of fixed keys value starting from 0
    // console.log(arr[key]);
}

// it is to be noted that for in loops can't be iterable on MAP

// NOTES
// in case of arrays we will use for of and in case of objects we use for in
