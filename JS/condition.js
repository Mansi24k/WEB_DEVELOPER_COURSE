let a = 2
let b = "2"
console.log(a == b); // true it is comparing only data or value 
console.log(a === b);// false it is comparing both data as well as datatype 
console.log(a!=b);//false
console.log(a!==b)

let c= "hii"
let d ="Hii"
console.log(c == d); //false case sensitive
console.log(c === d);// false false(for data) +true(for datatype) = false

let e = true
let f = 1
console.log(e == f);// true the value of 1 is true
console.log(e === f);// false, true(for data) + false(for datatype) = false

console.log(e!=f);//false
console.log(e!==f);//true

//if..else

let num = 14
if(num % 14 == 0){
    console.log(`Number ${num} is Even`);
}
else{
    console.log(`Number ${num} is Odd`);
}

let userName = "Jack"
if(userName == "Jack"){
    console.log(`Hii ${userName} you are the admin`);
}
else if(userName = John){
    console.log(`Hii ${userName} you are the Super admin`);
}
else{
    console.log(`Hii ${userName} you are unknown`);
}

//Ternary Operator
//Condition ? if true : if false

let num2 = 10
console.log(num2>10 ? "Hii" : "bye"); //bye(here condition is false)

console.log(num2==10 ? num2+1 : num2-1); //11(here condition is true)

