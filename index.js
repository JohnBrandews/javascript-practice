 
//  for(let i = 0; i<70; i++) {
//     if(i == 50)
//     break;
//     console.log(i);
//  }

//  let symbol = window.prompt("enter a symbol to use")
//  let rows = window.prompt("enter number of rows");
//  let columns = window.prompt("enter columns");
//  for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//         document.getElementById("myRectangle").innerHTML += symbol
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>"

// //  }
//  function add (x, y) { 
//     return  x+y

//  }
//  console.log(add(10, 78))

//  let area
//  let width
//  let height
//    width = window.prompt("enter width")
//    height = window.prompt("enter height")
//    function getArea (width, height) {
//       let result = width*height
//       return result
//    }
//    console.log(getArea(width, height))
    
//    let myNum = 123456.789
//    myNum = myNum.toLocaleString("hi-IN")//hindu

//    myNum = myNum.toLocaleString("en-US")//usa
//    myNum = myNum.toLocaleString("de-DE")//germany
//    myNum = myNum.toLocaleString("en-US",{style: "currency",currency: "USD"})//changes the currency to USD
//    myNum = myNum.toLocaleString(undefined, {style: "percent"}) //change to percent
//    myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}) //change to  unit you want

   

   // console.log(myNum)
   //guessing game//

//    const answer = Math.floor(Math.random()*10 +1)
//    let guesses = 0
//    document.getElementById("submitButton").onclick = function () {
//       let guess= document.getElementById("guessfield").value
//       guesses +=1
//       if (guess == answer) {
//          alert("is the answer ")
//       }
//       else if(guess < answer) {
//          alert("too small")
//    }
//    else if(guess > answer) {
//       alert("too big")
//    }
// }

// let fruits = ["apple", "orange", "mangoes","banana"]
//  fruits.push("lemons")
//  fruits.shift()
//  let length = fruits.length
//  console.log(length)
//  console.log(fruits)
//  let prices = [20,45,23,67,47,89]

//  for (let i = 0; i < prices.length; i++) {
//    console.log(prices[i])
//  }
//  for(let price of prices) {

//    console.log(price)

//  }

// var marks = []; // Initialize an empty array to store marks
// var sum = 0;

// // Prompt the user to enter their marks
// var numberOfMarks =parseInt (window.prompt("How many marks do you want to enter?"));

// // Loop to input marks
// for (var i = 0; i < numberOfMarks; i++) {
//    var mark = parseInt(window.prompt("Enter mark " + (i + 1)));
//    marks.push(mark); // Add the entered mark to the marks array
// }

// // Calculate the sum of marks
// for (var j = 0; j < marks.length; j++) {
//    sum += marks[j];
// }

// console.log("Sum of marks:", sum);

// let fruits = ["mangoes", "banana","apples"]; 
// let  vegetables = ["spinach", "carrots", "cabbage"]
// let meals = ["eggs", "meats", "fish"]
// let grocery = [fruits,vegetables,meals];
// grocery[1][2] = "hotdogs"
// for (let list of grocery) {
//    for (let food of list) {
//       console.log(food);
//    }
// }
//spread operator contains 3 dots

// let numbers = [1,2,3,4,5,6,7]
// let maximum = Math.max(...numbers)
// console.log(maximum)
//rest operator rep a function that accepts any number of arguments has 3 dots
// a = 1
// b = 2
// c = 3
// console.log(sum(a, b, c))
// function sum(...numbers) {
//    let total = 0
//    for (let number of numbers) {
//       total += number
//    }
//    return total
// }
//callback function
// sum (2,3,displayDOM)
// function sum(x,y,total)  {
//    let results = x+y
//    total(results)
// }
// function displayConsole(output) {
//    console.log(output)
// }
// function displayDOM (output) {
//    document.getElementById("myLabel").innerHTML = output
// }

// let students = ["john", "james", "mary"];

// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array) {
//    array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(x) {
//    console.log(x);
// }
//substring function extracts the specified index of an element and prints it

// let lil = "john Brandews"
// let sub = lil.substring(2,7)
// console.log(sub)
// map function 

let numbers = [1,2,3,4,5,6,7,8]
let squares = numbers.map(square)
squares.forEach(print)
function  square (element) {
   return Math.pow(element , 2)
}
function print(element) {
   console.log(element)
}

var marks = []
sum = 0
var enter =parseInt(window.prompt("enter  the number of marks you wish to add..."))
for(var i = 0; i <enter; i++) {
var mark = parseInt(window.prompt("Enter the your marks" + (i+1)))
marks.push(mark)
}
for(var j = 0; j<marks.length; j++) {
   sum+=marks[j]
}
console.log(sum)
// filter function checks for condition and creates anew array

let ages = [12, 13, 14, 15, 16, 17, 18, 19, 20]
let age = ages.filter(elder)
age.forEach(print)
function elder(element){
   return element>=18
}
function print(element){
   console.log(element)
}


