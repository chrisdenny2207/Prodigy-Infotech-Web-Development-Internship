const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;
let lapCount = 1;

/* Start Stopwatch */
startBtn.addEventListener("click", () => {

    if(!running){
        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);

        running = true;
    }

});

/* Pause Stopwatch */
pauseBtn.addEventListener("click", () => {

    clearInterval(timerInterval);
    running = false;

});

/* Reset Stopwatch */
resetBtn.addEventListener("click", () => {

    clearInterval(timerInterval);

    running = false;
    elapsedTime = 0;
    lapCount = 1;

    display.textContent = "00:00:00:000";
    laps.innerHTML = "";
});

/* Record Lap */
lapBtn.addEventListener("click", () => {

    if(running){

        const lap = document.createElement("li");

        lap.textContent =
            `Lap ${lapCount}: ${display.textContent}`;

        laps.appendChild(lap);

        lapCount++;
    }

});

/* Update Display */
function updateDisplay(){

    const milliseconds = elapsedTime % 1000;

    const seconds =
        Math.floor(elapsedTime / 1000) % 60;

    const minutes =
        Math.floor(elapsedTime / (1000 * 60)) % 60;

    const hours =
        Math.floor(elapsedTime / (1000 * 60 * 60));

    display.textContent =
        `${String(hours).padStart(2,"0")}:` +
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}:` +
        `${String(milliseconds).padStart(3,"0")}`;
}