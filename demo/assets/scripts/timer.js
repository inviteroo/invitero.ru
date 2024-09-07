let endDate;

function setDate(date) {
    endDate = new Date(date).getTime();
    
    if (isNaN(endDate)) {
        console.error("Некорректная дата: " + date);
        return;
    }

    updateTimer();
}

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (isNaN(timeLeft)) {
        console.error("Ошибка в расчете оставшегося времени.");
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.querySelector('.timer').textContent = 'Таймер истек!';
    }
}

let timerInterval;

document.addEventListener('DOMContentLoaded', () => {
    timerInterval = setInterval(updateTimer, 1000);
});