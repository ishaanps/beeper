let interval;
let isPaused = false;
let count = 0;
let reps = 0;

document.getElementById('startButton').addEventListener('click', function() {
    if (!interval) { // Start only if not already started
        beep(); // Initial beep to start
        startTimer();
    }
});

document.getElementById('pauseButton').addEventListener('click', function() {
    if (isPaused) {
        startTimer();
        isPaused = false;
        this.textContent = 'Pause'; // Change button text to 'Pause'
    } else {
        clearInterval(interval);
        interval = null;
        isPaused = true;
        this.textContent = 'Resume'; // Change button text to 'Resume'
    }
});

function startTimer() {
    let timerDisplay = document.getElementById('timer');

    interval = setInterval(() => {
        let timeInCycle = count % 8;
        timerDisplay.textContent = timeInCycle < 6 ? timeInCycle + 1 : 0; // Update the timer display

        if (timeInCycle === 0) {
            beep(); // Beep at the start of each cycle
            reps++;
            document.getElementById('reps').textContent = reps;
        } else if (timeInCycle === 6) {
            beep(); // Beep at the end of the 6-second rep
        }

        count++;
    }, 1000);
}

function beep() {
    var snd = new Audio('beep.wav'); // Make sure the path to your audio file is correct
    snd.play();
}
