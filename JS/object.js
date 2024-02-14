let movie ={
    mName : "Avengers",
    rating : 5,
    type : "Action"
}

//dot notation
console.log(movie.mName);
console.log(movie.rating);
console.log(movie.type);

//bracket notation
console.log(movie["mName"]);

//for in
for(i in movie){
    console.log(i);// access key of object
}
for(i in movie){
    console.log(movie[i]);// access value of object
}
console.log(movie);// give object

//nested object
const student = {
    name : "John",
    age: 20,
    marks:{
        science : 90,
        math : 80
    }
}
console.log(student.name);//John
console.log(student.marks.science);//90

//Array of Object
let movieList=[{
    mName : "Avengers",
    rating : 5,
    type : "Action"
},
{
    mName : "Harry Potter",
    rating : 6,
    type : "Action"
},
{
    mName : "Frozen",
    rating : 8,
    type : "Fantasy"
}]
console.log(movieList);
console.log(movieList[0]);//{mName: 'Avengers', rating: 5, type: 'Action'}
console.log(movieList[1]);//{mName: 'Harry Potter', rating: 6, type: 'Action'}
console.log(movieList[2]);//{mName: 'Frozen', rating: 8, type: 'Fantasy'}
console.log(movieList[0].mName);//Avengers