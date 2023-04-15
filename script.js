const countdown = () => {
  const birthday = new Date(
    `${document.getElementById("birthday").value}T00:00`
  );
  const currentDate = new Date();
  const difference = birthday.getTime() - currentDate.getTime();

  if (difference <= 0) {
    document.querySelector(".timer").innerHTML = "Happy Birthday!";
    const timerElement = document.querySelector(".timer");
    timerElement.innerHTML = "Happy Birthday!";
    timerElement.style.color = "#CF1767";
    timerElement.style.fontSize = "24px";
 
    return;
  }

  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.querySelector(".days").innerHTML = formatTime(days);
  document.querySelector(".hours").innerHTML = formatTime(hours);
  document.querySelector(".minutes").innerHTML = formatTime(minutes);
  document.querySelector(".seconds").innerHTML = formatTime(seconds);
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    loadConfetti();
    document.querySelector(".timer").innerHTML = "Happy Birthday!";
  } else {
    countdown = setTimeout(countdown, 1000);
  }
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  countdown();
  loadConfetti();
  document.getElementById("countdown").innerHTML = "🎂 Happy Birthday! 🎂";
});

function loadConfetti() {
  confetti({
    particleCount: 1000,
    spread: 100,
    origin: { y: 1 },
  });
}
