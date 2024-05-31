const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');
const appendTens = document.getElementById('tens');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const clear = document.getElementById('clear');

let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;

const countStarts = () =>{
    tens++;
    if(tens<9){
        appendTens.innerHTML = '0' + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
     }
    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }
}

start.onclick = () =>{
    clearInterval(interval);
    interval = setInterval(countStarts, 10)
}
stop.onclick = () =>{
    clearInterval(interval);
}
clear.onclick = () =>{
    clearInterval(interval);
    appendMinutes.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
}