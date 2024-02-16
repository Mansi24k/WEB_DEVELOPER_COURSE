//closure = own scope + Lexical Scope
//1
var price = 1000
function getPrice() {
    console.log(`The old price: ${price}`);//The old price: undefined //hoisting
    var price= 500// own scope
    console.log(`The new price: ${price}`);//The new price: 500
}
getPrice()

//2
var price = 1000//lexical scope
function getPrice2() {
    console.log(`The old price: ${price}`);//The old price: 1000 both access its lexical scope value
    console.log(`The new price: ${price}`);//The new price: 500
}
getPrice2()

//3
function outer(){
    var a= 20
   function inner(){
    console.log(a);//20
    }
    return inner
}
// var close = outer()
// close() 
outer()() //call outer and then inner 