// let canvas = document.getElementById("mycanvas");
// let context = canvas.getContext("2d");
//DRAWING LINES

// context.strokeStyle = "black";
// context.lineWidth = 10

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250,250);
// context.lineTo(250,500)
// context.moveTo(500, 0);
// context.lineTo(250,250)
// context.stroke(); 
//DRWING TRIANGLES

// context.fillStyle = "aqua";
// context.lineWidth = 2;
// context.strokeStyle = "blue";
// context.beginPath();
// context.moveTo(250,0)
// context.lineTo(0 ,250);
// context.lineTo(500,250)
// context.lineTo(250,0)
// context.stroke();
// context.fill()

// RECTANGLES

// context.fillStyle = "red"
// context.fillRect(0, 0, 250, 250)
// context.strokeStyle = "black"
// context.strokeRect(0, 0, 250, 250)

// context.fillStyle = "green"
// context.fillRect(0, 250, 250, 250)
// context.strokeStyle = "black"
// context.strokeRect(0, 250, 250, 250)

// context.fillStyle = "aqua"
// context.fillRect(250, 250, 250, 250)
// context.strokeStyle = "black"
// context.strokeRect(0, 250, 250, 250)

// context.fillStyle = "blue"
// context.fillRect(250, 0, 250, 250)
// context.strokeStyle = "black"
// context.strokeRect(0, 250, 250, 250)

//CIRCLES

// context.fillStyle = "aqua"
// context.lineWidth = 2
// context.strokeStyle = " blue"
// context.beginPath()
// context.arc(250, 250, 200, 0, 2*Math.PI)
// context.stroke()
// context.fill()
 
//TEXT

// context.font = "50px  bold"
// context.fillStyle = "blue"
// context.fillText("yaah", 100, 100)
 //WINDOW
 console.log(window.innerHeight)
 console.log(window.innerWidth)
 
 console.log(window.outerHeight)
 console.log(window.outerWidth)
 console.log(window.scrollX)
 console.log(window.scrollY)

 console.log(window.location.href)
//  window.location.href = "https://google.com"
console.log(window.location.hostname)
//opening ,closing & printing a window
const myButton = document.querySelector("#myButton")
// myButton.addEventListener("click", () => window.open())
// myButton.addEventListener("click", () => window.close())
// myButton.addEventListener("click", () => window.print())
// window.alert("Hello")
window.confirm("Are you sure you want to exit")



 