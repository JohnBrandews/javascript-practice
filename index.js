 
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
 let area
 let width
 let height
   width = window.prompt("enter width")
   height = window.prompt("enter height")
   function getArea (width, height) {
      let result = width*height
      return result
   }
   console.log(getArea(width, height))
    
   let myNum = 123456.789
   myNum = myNum.toLocaleString("hi-IN")//hindu

   myNum = myNum.toLocaleString("en-US")//usa
   myNum = myNum.toLocaleString("de-DE")//germany
   myNum = myNum.toLocaleString("en-US",{style: "currency",currency: "USD"})//changes the currency to USD
   myNum = myNum.toLocaleString(undefined, {style: "percent"}) //change to percent
   myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}) //change to  unit you want

   

   console.log(myNum)
