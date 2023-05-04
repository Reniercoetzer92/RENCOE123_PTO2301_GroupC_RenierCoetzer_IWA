const nickname = "Timmy"; 
const firstname = "Timothy";

//&& if the value before && is truthy then it proceeds to the next value
//|| if the value before || is Falsy then it proceeds to the next value

if (nickname || firstname){
console.log("Good Morning,", nickname || firstname, "!") //remove instipulation ${word}
}

else {console.log("Good Morning !")} //else if none of the names exsist then only say Good Morning!