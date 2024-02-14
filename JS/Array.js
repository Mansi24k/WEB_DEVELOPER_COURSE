let city = ["Delhi", "Mumbai","Hyderabad","Pune","Nagpur"]

//for loop
for(let i=0; i < city.length; i++){
    console.log(`At Position ${i} :`,city[i]);
}

//while loop
let a = 0
while (a < city.length){
    console.log(`At Position ${a} :`,city[a])
    a++
}

//do loop
let b = 0
do{
    console.log(`At Position ${b} :`,city[b])
    b++
}while (b < city.length)

//for of
for(let myCity of city)
{
    console.log(myCity);
}

//if want to access array inside an array
let city1 = ["Delhi", "Mumbai",["Red","Yellow","Blue"],"Hyderabad","Pune","Nagpur"]


//for of
for(let myCity of city1) // variable of iterable
    if(Array.isArray(myCity)){
       for(let myColor of myCity){
        console.log(myColor);
       }
    }
    else{
    console.log(myCity);
}

//for
for( let i = 0; i< city1.length;i++){
    if(Array.isArray(city1[i])){
        for(let j=0; j < city1[i].length; j++){
            console.log(city1[i][j]);
        }
    }
    else{
        console.log(city1[i]);
    }
}
// //1
// let color = ["red","pink","orange","gray","white"]
// let myFunction = (item) => {
//     console.log(item);
//     return item
// }
// // for each
//  color.forEach(myFunction)
 
//  //2
//  let number = [1,2,3,4,5]
//  let num = number.forEach((value)=>{
//     console.log(value);
//    return  value*value
//     });

// //3
// let arr = [22,11,23,63]
// arr.forEach(myMethod)

// function myMethod(item){
//    console.log(item);
//    return item
// }


 




