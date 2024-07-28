const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");

function countdown() {
  let totalSeconds =  parseInt(days.textContent) * 86400 +
                      parseInt(hours.textContent) * 3600 +
                      parseInt(min.textContent) * 60 +
                      parseInt(sec.textContent);

  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      return;
    }

    totalSeconds--;

    const daysLeft = Math.floor(totalSeconds / 86400);
    const hoursLeft = Math.floor((totalSeconds % 86400) / 3600);
    const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
    const secondsLeft = totalSeconds % 60;

    days.textContent = String(daysLeft).padStart(2, '0');
    hours.textContent = String(hoursLeft).padStart(2, '0');
    min.textContent = String(minutesLeft).padStart(2, '0');
    sec.textContent = String(secondsLeft).padStart(2, '0');
  }, 1000);
}

window.onload = function() {
  days.textContent = "08";
  hours.textContent = "23";
  min.textContent = "59";
  sec.textContent = "59";
  countdown();
};
