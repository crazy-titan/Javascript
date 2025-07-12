/* for loops    easy peagy just remember the c++ lectures and sense the 
controler . where it willl come after eveery iteration

we can use conditions inside the for loops as per our requirements
remember all the conditions of scope while doing iterations.

we can use SWITCH loops also by applying break after each case, if any case
get matched than the all console after that case will get printed except 
for the default case, to avoid this we use break.

print the table , write the counting and many more with the help of loops 

in javascript for loops mostly runs on arrrays and keep in mind about
increment and undefined output if we use more index than the actuall length*/




/////////////////////////////////////////

/* while loops are also like for loops , here we initialize a value first,
then make the condition then make increment inside it

do while loops is little bit wierd , it will first do the works by the 
value that is assigned first than also increament it and at last
do-while -- it will check the condition */


//++++++++++++++++++ For of loop /////////////////
let arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
} // no need to iteration or any other parameters , we can use this in string too


// maps // it holds unique values or no repetation and output will come in order as
// input has order. maps are type of objects so it requires keys and value

const map = new Map() // map is object
map.set("IN","india")
map.set("CH","china")
map.set("FR","france")
map.set("IN","india")
// console.log(map);

// can we use for of loop on maps? let's see

for (const keys of map) {
    //console.log(keys);  // this will output as an array of keys and value
}
for (const [keys,value] of map) {
    //console.log(keys,':-',value) // this is destructuring of map, output is keys and value
}

// can we do for of loops on the objects? let's see

const myObject = {
    "game1":"clash of clans",
    "game2":"mini-militia"
}
for (const [keys,value] of myObject) {
    //console.log(keys,value) // myObject is not iterable, we will do this by other method later
}
