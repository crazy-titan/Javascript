// most of the time we will use this loop, this loop doesn't give any value(undefined)

let coding = ["cpp","java","python","javascript"]

coding.forEach( function (i) {
    //console.log(i);
})
/* here we excess forEach by using dot and than we are calling the function 
so we don't write its name , (i) is basically variable parameter from the array coding
and at last we are printing the i */

// we can do this same for arrow functions

coding.forEach( (i) => {
    //console.log(i);
})
// here again we don't write the name of the function becz we are calling it back


// for Each contains 3 parameters keys, index and arrays(VvI)
coding.forEach((i,index,array)=>{
    //console.log(i,index,array);
})


/* FOR EACH is mostly used when we handle the database
because value comes from database is of the form of array consisting of objects
*/

const myCoding = [
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "cpp",
        languageFile: "c"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName); 
})
// here we use the properties of objects
/* concept is when we assign item to print it is object by natural
so output is object, now i can use that more effectively. */

// we can use filter to get the output 

// see this video again on yt

// filter will output, only if true // basically true false character

// filters are used in fetching the data in database.etc we can also use 
// forEach but we have to make if condition inside it. so, it will be 
// complicated so we just apply filter and one line method of function,that's it

/* .map is also same like filter and if u open scope it will say undefined
if u dont use return*/

/* we can do the chaining with the help of, applying .map multiple times
or filter, and every time the value of next .map variable is equall to final output
of previous .map or .filter */

/* the vvi method for addition is reduce method
here we have accumulator,currentvalue and than accumulator + currentvalue and , initial value
first time it will take initial value as accumulator , later than it will
take accumulator + currentvalue as accumulator.
we can see this by doing console log inside the reduce by using `${}` 

// we can use map on arrays becz they are inbuilt in it
// we always use for each while doing node collection (DOM)
// we will converrt the HTML collection by using Array.from() in array, then we 
can apply map or forEach loop*/