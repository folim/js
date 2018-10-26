'use strict';
let now = new Date(),
    timer = document.querySelector(".timer"),
    hours, minutes, seconds;

setInterval(function() {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i; 
        }
        return i;
    }
    timer.textContent = hours + ':' + minutes + ':' + seconds;
},1000);


