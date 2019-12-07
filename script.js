function finalClock()
{
const myClock = new Date();

let hours = myClock.getHours();
let minutes = myClock.getMinutes();
let seconds = myClock.getSeconds();

if (hours < 10) {
    hours = "0" + hours;
}

if (minutes < 10) {
    minutes = "0" + minutes;
}

if (seconds < 10) {
    seconds = "0" + seconds;
}

document.getElementById('hour').innerHTML = hours + " :";
document.getElementById('minute').innerHTML = minutes + " :";
document.getElementById('second').innerHTML = seconds;
}

setInterval(finalClock, 1000);
