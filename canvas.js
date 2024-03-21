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
//  //WINDOW
//  console.log(window.innerHeight)
//  console.log(window.innerWidth)
 
//  console.log(window.outerHeight)
//  console.log(window.outerWidth)
//  console.log(window.scrollX)
//  console.log(window.scrollY)

//  console.log(window.location.href)
//  window.location.href = "https://google.com"
// console.log(window.location.hostname)
//opening ,closing & printing a window
// const myButton = document.querySelector("#myButton") . onclick = function (){


// myButton.addEventListener("click", () => window.open())
// myButton.addEventListener("click", () => window.close())
// myButton.addEventListener("click", () => window.print())
// window.alert("Hello")
// window.confirm("Are you sure you want to exit")
// }

//COOKIES
// console.log(navigator.cookieEnabled);
// document.cookie = "firstname=john;expires=Thu, 01 Jan 2070 00:00:00 GMT"
// console.log(document.cookie)
function setCookie(name, value,daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive*24*60*60*1000))
    let expires = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value};${expires}; path=/`
}
function deleteCookie(name) {
    setCookie(name, null ,null)
}
function getCookie(name) {
    const cookieString = decodeURIComponent(document.cookie);
    const cookieArray = cookieString.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }

    return null; 
}
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn= document.querySelector("#submitBtn");
const cookiesBtn = document.querySelector("#cookiesBtn");
submitBtn.addEventListener("click",() => {
    setCookie("firstName",firstText.value,365);
    setCookie("lastName",lastText.value,365);

})
cookiesBtn.addEventListener("click",() => {
    firstText.value =getCookie("firstName");
    lastText.value =getCookie("lastName");
})

// setCookie("email","bendy@gmail.com",1)
// deleteCookie("email")
// console.log(document.cookie)/
// setCookie("firstName", "John", 365)
// setCookie("lastName", "iano", 365)
// getCookie("firstName")
// console.log(getCookie("firstName"))





 