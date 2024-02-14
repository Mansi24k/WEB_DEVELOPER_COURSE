//function declaration or definition
function isEvenOdd(num){ 
    let out//parameter
    if(num % 2 == 0){
       out= (`${num} is Even-Number`)
    }
    else{
        out= (`${num} is odd-Number`);
    }
    return out
}

console.log(isEvenOdd(30));//function calling
console.log(isEvenOdd(7));//argument

//Arrow function
//1
// const sum = (a,b) => a+b
const sum = (a,b) => a+b
console.log(sum(5,6))//11

//2
let age = 50
let greet = age>20 ? () => console.log("Adult"): () => console.log("Teenage");
greet()

//3
const myColor = (colorName) => {
    let out1
    if(colorName == "red"){
        out1=(`the color is ${colorName}`);
    }
    else{
        out1=(`the color is ${colorName}`);
    }
    return out1
}
console.log(myColor("red"));
console.log(myColor("yellow"));