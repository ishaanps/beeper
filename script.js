document.getElementById('startButton').addEventListener('click', function() {
    let count = 0;
    let reps = 0;
    let timerDisplay = document.getElementById('timer');
    let interval = setInterval(() => {
        let timeInRep = count % 6;
        timerDisplay.textContent = timeInRep === 0 ? 5 : timeInRep - 1; // Update the timer display

        if (timeInRep === 0) {
            beep();
            reps++;
            document.getElementById('reps').textContent = reps;
        } else if (timeInRep === 5) {
            beep();
        }

        count++;
    }, 1000);
});

function beep() {
    var snd = new Audio('beep.wav'); // Make sure the path to your audio file is correct
    snd.play();
}
