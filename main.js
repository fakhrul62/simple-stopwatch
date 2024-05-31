// Variables to keep track of the timer state
let timerInterval; // Will hold the interval ID for clearing the interval later
let elapsedTime = 0; // Total elapsed time in seconds
let paused = true; // Boolean flag to indicate if the stopwatch is paused

// Get references to the DOM elements
const stopwatchDisplay = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Event listener for the Start button
startBtn.addEventListener('click', () => {
  if (paused) { // Only start if the stopwatch is paused
    paused = false; // Unpause the stopwatch
    timerInterval = setInterval(updateTime, 1000); // Update the time every second (1000 ms)
  }
});

// Event listener for the Pause button
pauseBtn.addEventListener('click', () => {
  paused = true; // Pause the stopwatch
  clearInterval(timerInterval); // Stop the interval
});

// Event listener for the Reset button
resetBtn.addEventListener('click', () => {
  paused = true; // Pause the stopwatch
  clearInterval(timerInterval); // Stop the interval
  elapsedTime = 0; // Reset the elapsed time to 0
  updateDisplay(0); // Update the display to show 00:00:00
});

// Function to update the elapsed time
function updateTime() {
  elapsedTime += 1; // Increment the elapsed time by 1 second
  updateDisplay(elapsedTime); // Update the display with the new elapsed time
}

// Function to update the stopwatch display
function updateDisplay(time) {
  const hours = Math.floor(time / 3600); // Calculate the hours
  const minutes = Math.floor((time % 3600) / 60); // Calculate the minutes
  const seconds = time % 60; // Calculate the seconds
  // Format the time as hh:mm:ss and update the display
  stopwatchDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Function to add leading zeros to single-digit numbers
function pad(number) {
  return number.toString().padStart(2, '0'); // Pad the number with leading zeros if needed
}
