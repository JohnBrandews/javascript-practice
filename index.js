 
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
//    prices = prices.sort().reverse()
//    console.log(price)

//  }
var marks = []; // Initialize an empty array to store marks
var sum = 0;

// Prompt the user to enter their marks
var numberOfMarks = parseInt(window.prompt("How many marks do you want to enter?"));

// Loop to input marks
for (var i = 0; i < numberOfMarks; i++) {
   var mark = parseInt(window.prompt("Enter mark " + (i + 1)));
   marks.push(mark); // Add the entered mark to the marks array
}

// Calculate the sum of marks
for (var j = 0; j < marks.length; j++) {
   sum += marks[j];
}

console.log("Sum of marks:", sum);
