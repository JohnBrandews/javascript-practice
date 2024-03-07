const myLabel = document.getElementById("myLabel");
update()
// i have used the setinterval to make it update every second 
setInterval(update ,1000)
 function update(){
    //creation of date object 
    let date = new Date()
    myLabel.innerHTML =  formatTime(date)
    //format time function to bring in time variables
    function formatTime(date){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrPm = hours >= 12 ? "pm" : "am"
        hours = (hours % 12)  || 12;
        hours = formatZero(hours)
        minutes = formatZero(minutes)
        seconds = formatZero(seconds)
        return `${hours} : ${minutes}:${seconds} ${amOrPm}`
    }
    function formatZero(time) {
        time = time.toString();
        if (time.length < 2) {
            return '0' + time;
        } else {
            return time;
        }
    }
}