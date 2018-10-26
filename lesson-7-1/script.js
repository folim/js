'use strict';
let now = new Date(),
    timer = document.querySelector(".timer"),
    hours, minutes, seconds;

setInterval(function() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timer.textContent = hours + ':' + minutes + ':' + seconds;
},1000);


