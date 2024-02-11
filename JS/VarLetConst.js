// var => redeclare and reassign it is a global scope             
// let => cannot redeclare but can reassign
// const => neither redeclare or reassign

//Var
var a = 10;
var a= 20 //redeclare
console.log(a); //20 latest value will be output
a=30 //reassign
console.log(a); //30

//Let
let b = 10;
// let b =20 //redeclare will give error: Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(a); //10
b = 20; // but can reassign
console.log(b);//20

//Const
const c = 10
// const c = 20 // redeclare give error: Uncaught SyntaxError: Identifier 'c' has already been declared
// c = 30 // reassign give error: VarLetConst.js:22 Uncaught TypeError: Assignment to constant variable.
console.log(c); //10

var num1 = 11
let num2 = 12
{
    let num3 = 13
    console.log(num1);// 11 var is global scoped
    console.log(num3)// 13 let is blocked scoped
}
console.log(num2);//12

// String Literals
let mname = "Avenger"
let type = "Action"
let category = "Hollywood"
let rating = 5

console.log("An " +mname+ " is an "+type+ " movie with rating as "+rating+ " and from category "+category);

//Template Literals
console.log(`An ${mname} is an ${type} movie with rating as ${rating} and from category ${category}`);