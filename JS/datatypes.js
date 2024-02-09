let a= "hii"
let b= "Javascript"
console.log(a+b); //hiiJavascript
console.log(a-b);//NAN => Not A Number

let c = "10"
let d = 1
console.log(c-d);//9 here the string is changed to number but id any alphabet is their inside "" then it will give NAN

console.log("Hii"+true);//Hiitrue

console.log("hii"-true);// Nan true = 1

console.log("hii"-"true");//NAN

//Converting string to number

let p = "30"
let q = "30"
console.log(p+q);//"3030"
console.log(parseInt(p) + parseInt(q));//60 here string is converting into integer

let r = "hii"
console.log(parseInt(r)); //Nan Because r is not actually a number it is alphabet inside it so it is Not a Number

let s = "30.50"
let t = "20.12"
console.log(parseFloat(s) + parseFloat(t)); //50.620000000000005 for floating point value

console.log(Number(s) + Number(t)); //50.620000000000005 // we can use this also Number()

console.log(+s + +t); //50.620000000000005 // we can also used +s to convert string into number type

//alert, confirm, prompt

alert("Form Submitted") // Notification

confirm("Do you want to leave this page?")// either yes or cancel i.e, no

let num1 = prompt("Enter First Number")
let num2 = prompt("Enter Second Number")
console.log(Number(num1)+Number(num2));