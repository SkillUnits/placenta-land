function startTimer(timerId, messageId, initialTime) {
  let remainingTime = initialTime; // Встановлюємо початковий час
  const timerDisplay = document.getElementById(timerId);

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  }

  const timerInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      timerDisplay.textContent = formatTime(remainingTime);
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = "00:00:00";
    }
  }, 1000);

  timerDisplay.textContent = formatTime(remainingTime);
}

// Запуск двох таймерів при завантаженні сторінки
window.onload = () => {
  startTimer('timer', 'message1', 30 * 60); // Перший таймер
  startTimer('timer-2', 'message2', 30 * 60); // Другий таймер
};