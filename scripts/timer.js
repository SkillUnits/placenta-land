const timerDisplay = document.getElementById('timer');
let remainingTime = 30 * 60; // 30 хвилин у секундах

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
}

function startTimer() {
  const timerInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      timerDisplay.textContent = formatTime(remainingTime);
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = "00:00:00";
    }
  }, 1000);
}

// Запуск таймера при завантаженні сторінки
window.onload = () => {
  timerDisplay.textContent = formatTime(remainingTime);
  startTimer();
};