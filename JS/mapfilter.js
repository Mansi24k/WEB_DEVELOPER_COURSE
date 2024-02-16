//map
let a = [1,2,3,4,5]
let b = a.map((data)=>{
    return data+2
})
console.log(b);//[3, 4, 5, 6, 7] 

const people = [{
    name : "John",
    age : 20
},
{
    name : "Jack",
    age : 21
},
{
    name : "Peter",
    age : 20
}]

let result = people.map((data)=> data.name)
console.log(result);// ['John', 'Jack', 'Peter']

//filter
let arr = [35,20,45,10,26,3]

let ans = arr.filter((data)=>{
    return data>20
})
console.log(ans);//[35, 45, 26]

