let display = document.getElementById('display');
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
    }
}


function stop() {
    if (isRunning) {
        isRunning = false;

        elapsedTime = Date.now() - startTime;
        clearInterval(timerInterval);
    }
}


function reset() {
    clearInterval(timerInterval);
    display.textContent = `00:00:00:00`;
    isRunning = false;
    elapsedTime = 0;
}

function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / (1000));
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}   