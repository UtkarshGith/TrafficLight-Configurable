const lights = document.getElementById("lights");
const red = document.getElementById("div1");
const yellow = document.getElementById("div2");
const green = document.getElementById("div3");

const configuration = document.getElementById("configuration");

const insputsec = document.getElementById("inputsec");
const counter = document.getElementById("counter");

const selectcolor = document.getElementById("selectcolor");

//Traffic color controller
let sec = 8,
  cnt = 0,
  timerid,
  mainid,
  state = 0;
function ChnangeColor() {
  reset();
  clearInterval(timerid);
  if (state === 0) {
    red.style.backgroundColor = "red";
  } else if (state === 1) {
    yellow.style.backgroundColor = "yellow";
  } else if (state === 2) {
    green.style.backgroundColor = "green";
  }
  let x = sec;
  counter.textContent = "Counter :" + x;

  timerid = setInterval(() => {
    x = x - 1;
    if (x >= 0) {
      counter.textContent = "Counter :" + x;
    }
    // x = x % sec;
  }, 1000);
  state = (state + 1) % 3;
}

function startcycle() {
  clearInterval(mainid);
  clearInterval(timerid);
  reset();

  ChnangeColor(sec, state);

  mainid = setInterval(ChnangeColor, sec * 1000);
}

//Resetting
function reset() {
  red.style.backgroundColor = "white";
  yellow.style.backgroundColor = "white";
  green.style.backgroundColor = "white";
}

//setting input width

insputsec.addEventListener("change", () => {
  let currentval = insputsec.value;
  sec = Number(currentval);
  if (!sec || sec <= 0) return;
  startcycle();
});

selectcolor.addEventListener("change", () => {
  const val = selectcolor.value;
  if (val === "Red") {
    state = 0;
  } else if (val === "Green") {
    state = 2;
  } else if (val === "Yellow") {
    state = 1;
  }
  if (!sec || sec <= 0) return;
  startcycle();
});
if (sec >= 0) {
  startcycle();
}
