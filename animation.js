
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");
// myButton.addEventListener("click", begin)
// function begin() {
//     let Timerid = null
//     let degrees =0
//     let x=0
//     let y = 0
//     Timerid = setInterval(frame, 5)
//     function frame() {
//         if(x >= 300 || y >= 300){
//             clearInterval(Timerid)
//         }
//         else{
//             degrees+=5
//             x+=1
//             y+=1
//             myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
//             myAnimation.style.left = x + "px"
//             myAnimation.style.top = y + "px"

//         }
//     }
// }

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");
myButton.addEventListener("click", begin)
function begin() {
    let Timerid = null
    //scale used for determining the size of the image
    let scaleX =1
    let scaleY =1
    Timerid = setInterval(frame, 5)
    function frame() {
        if(scaleX<= 0.1||scaleY<= 0.1){
            clearInterval(Timerid)
        }
        else{
            
            scaleX-=0.01
            scaleY-=0.01
            myAnimation.style.transform = "scale("+scaleX+"," +scaleY+")";
           

        }
    }
}
  