document.getElementById('startButton').addEventListener('click', function() {
    let count = 0;
    let reps = 0;
    let interval = setInterval(() => {
        count++;
        if (count % 6 === 0) {
            beep();
            reps++;
            document.getElementById('reps').textContent = reps;
        } else if (count % 6 === 5) {
            beep();
        }
    }, 1000);
});

function beep() {
    var snd = new Audio('beep.wav');
    snd.play();
}
