console.log("Lets talk about variables in js var let and const")
//var a = 6; ---> global scoped --> can be updated and redeclared
//let,const --> block scoped
//let can be updated but can't be redclared
//const can't be updated and con't be redeclared

// var a = 45;
// var a = "p"
let b = "Harry";
const author = "Harry"
author = 5 // Throws an error because constant cannot be changed
b = 4
const harry = 0;
let c = null
let d  = undefined  
{
  let b = 'this'
  console.log(b)
}
console.log(b)
