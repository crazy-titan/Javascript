// document.querySelector('clock')
const clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString); // print the date
// now we are taking this to print this continuosly . so, we use setInterval
// setInterval(function(){},interval) //syntax
setInterval(function(){
    let date = new Date();
     // print the date, but we want to print it on clock id
    clock.innerHTML = date.toLocaleTimeString();
},1000);