// Create an AudioContext (compatibility with various browsers)
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to initialize the audio context
function initAudioContext() {
    // Create a buffer source node
    var source = audioContext.createBufferSource();
    source.buffer = audioContext.createBuffer(1, 1, 22050); // create an empty buffer
    source.connect(audioContext.destination);
    source.start(0);

    // Play an inaudible sound to unlock the audio
    if (audioContext.resume) {
        audioContext.resume();
    }
}

// Updated beep function to play within the AudioContext
function beep() {
    var snd = new Audio('beep.wav'); // Make sure the path to your audio file is correct
    snd.play();
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

// Add event listener to your start button to initialize audio context
document.getElementById('startButton').addEventListener('click', function() {
    initAudioContext();
    setTimeout(function() {
        beep(); // Initial beep to start

        let count = 0;
        let reps = 0;
        let timerDisplay = document.getElementById('timer');
        let interval = setInterval(() => {
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
    }, 1000); // Wait for 1 second before starting the timer
});
