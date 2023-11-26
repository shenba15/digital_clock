let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

setInterval(time,1000)

function time(){
    let currentTime = new Date();

    
    let hour = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let secs = currentTime.getSeconds();

    ampm.innerHTML = hour <= 12 ? 'AM' : 'PM';
    hour = (hour > 12) ? (hour-12) : hour
    hrs.innerHTML = (hour < 10 ? '0' : '') + hour;
    min.innerHTML = (mins < 10 ? '0' : '') + mins;
    sec.innerHTML = (secs < 10 ? '0' : '') + secs;
}

