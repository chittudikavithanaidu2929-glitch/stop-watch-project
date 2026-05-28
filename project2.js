let timerdisplay = document.querySelector('.timerdisplay');
let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let sec = 0;
let min = 0;
let timerid = null;

startbtn.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(starttimer, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerid);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerid);
    msec = 0;
    sec = 0;
    min = 0;
    timerdisplay.innerHTML = "00:00:00";
});

function starttimer() {
    msec++;

    if (msec == 100) {
        msec = 0;
        sec++;
    }

    if (sec == 60) {
        sec = 0;
        min++;
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secstring = sec < 10 ? `0${sec}` : sec;
    let minstring = min < 10 ? `0${min}` : min;

    timerdisplay.innerHTML = `${minstring}:${secstring}:${msecstring}`;
}