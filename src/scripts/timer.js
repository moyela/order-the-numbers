let time = 0,
  interval;

export function start() {
  let timer = document.getElementById("timer");
  interval = setInterval(() => {
    time += 1;
    timer.innerHTML = toHHMMSS(time);
  }, 1000);
}

export function pause() {
  clearInterval(interval);
  interval = null;
}

export function resume() {
  start();
}

export function reset() {
  let timer = document.getElementById("timer");
  clearInterval(interval);
  interval = null;
  time = 0;
  timer.innerHTML = toHHMMSS(time);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, "0");
  minutes = `${minutes}`.padStart(2, "0");
  seconds = `${seconds}`.padStart(2, "0");

  return "Time: " + hours + ":" + minutes + ":" + seconds;
}
