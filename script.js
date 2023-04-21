const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".second");

function getTime() {
  const time = new Date();

  const hourTime = time.getHours();
  const minuteTime = time.getMinutes();
  const secondTime = time.getSeconds();

  const hRoration = (hourTime / 12) * 360 + minuteTime / 2;
  const mRotation = (minuteTime / 60) * 360;
  const sRotation = (secondTime / 60) * 360;

  hourE1.style.transform = `rotate(${hRoration}deg)`;
  minuteE1.style.transform = `rotate(${mRotation}deg)`;
  secondE1.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(getTime, 1000);