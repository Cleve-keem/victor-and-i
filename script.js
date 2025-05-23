const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function updateTimes() {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  hours.textContent = currentHours + ":";
  minutes.textContent = currentMinutes + ":";
  seconds.textContent = currentSeconds;
}
setInterval(() => {
  updateTimes();
}, 1000);
