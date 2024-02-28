function calc(option){
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    if(option == 'add'){
    document.getElementById("out").innerText=`Addition of First and Second Number is: ${(Number(a)+Number(b))}`
      }
      else{
    document.getElementById("out").innerText=`Subtraction of First and Second Number is: ${(Number(a)-Number(b))}`
      }
    }


// function add(){
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     document.getElementById("out").innerText=`Addition of First and Second Number is: ${(Number(a)+Number(b))}`
// }

// function sub(){
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     document.getElementById("out").innerText=`Subtraction of First and Second Number is: ${(Number(a)-Number(b))}`
// }