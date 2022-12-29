let milisec = 00;
let sec = 00;
let min = 00;
let display = document.getElementById("display");
let interval;

function formatNumbers(numTime) {
  if (numTime < 10) {
    return "0" + numTime;
  } else {
    return numTime;
  }
}

function start() {
  chronometer();
  clearInterval(interval);
  interval = setInterval(chronometer, 10);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  milisec = 0;
  sec = 0;
  min = 0;
  display.innerText = "00:00:00";
}

function chronometer() {
  milisec++;
  if (milisec == 99) {
    sec++;
    milisec = 0;
  } else if (sec == 60) {
    sec = 0;
    min++;
  }
  display.innerText = `${formatNumbers(min)}:${formatNumbers(sec)}:${formatNumbers(milisec)}`;
}
