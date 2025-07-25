let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // reset if already running
  const minutes = parseInt(document.getElementById("minutesInput").value);
  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  let timeInSeconds = minutes * 60;

  countdownInterval = setInterval(() => {
    let hrs = Math.floor(timeInSeconds / 3600);
    let mins = Math.floor((timeInSeconds % 3600) / 60);
    let secs = timeInSeconds % 60;

    document.getElementById("countdown").textContent =
      `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    timeInSeconds--;

    if (timeInSeconds < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = "Time's up!";
    }
  }, 1000);
}
