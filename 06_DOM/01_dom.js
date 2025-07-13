/* DOM(Document object Manipulation) 
it is used to manipulate the html text(jitna me janta hu) angular sikh gye lakin 
ye ni aata hai to aap k L lgg jayenge,AI job kha gya.
//window k ander document ka ander bahut sari files


HTML collection , node list are a type of array but it is not in real




ek file banaya html ka fir open kiya live server m and than click on 
inspect elements
get,set use karna sikhaya and hmesa value over-ride hojati hai dhyan rakhna.
margin,padding sab kar sakte test apply kar k*/


//+++++++++++++interesting++++++++++
/* innerText , innerHTML, innerContent = every thing will output same if,
everything is same(pure text)
but if any html tags are written to hide someting, it will show every tag and text both
if we use content , it will show the hidden text
if we use text , it will show only the text which are set to be visible 

//eg
<h1>DOM manipulation <span style="display:none">is good</span></h1>

DOM manipulation  -- innerText
DOM manipulation is good -- innerContent
DOM manipulation <span style="display:none">is good</span> -- innerHTML
//we always use forEach if we get node collection (DOM)
// we will converrt the HTML collection by using Array.from() in array, then we 
can apply map or forEach loop.
target karne k baad, usko ek variable m store karo and than
*/