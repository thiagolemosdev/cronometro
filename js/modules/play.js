export default function initContador() {}

let contador = document.querySelector("[data-count]");
const playButton = document.querySelector("[data-play]");
const pauseButton = document.querySelector("[data-pause]");
const stopButton = document.querySelector("[data-stop]");
const playImg = playButton.children[0];
const pauseImg = pauseButton.children[0];
const stopImg = stopButton.children[0];

let segundos = 0;
let minutos = 0;
let horas = 0;

let contarSegundos;
let contarMinutos;
let contarHoras;

playButton.addEventListener("click", play);
function play() {
  playImg.setAttribute("src", "img/play-red.svg");
  pauseImg.setAttribute("src", "img/pause-black.svg");
  stopImg.setAttribute("src", "img/stop-black.svg");

  contarSegundos = setInterval(() => {
    segundos++;
    contador.innerHTML = `${("00" + horas).slice(-2)}:${("00" + minutos).slice(
      -2
    )}:${("00" + segundos).slice(-2)}`;
  }, 1000);

  contarMinutos = setInterval(() => {
    segundos = 0;
    minutos++;
  }, 60000);

  contarHoras = setInterval(() => {
    segundos = 0;
    minutos = 0;
    horas++;
  }, 3600000);
}

pauseButton.addEventListener("click", pausar);
function pausar() {
  playImg.setAttribute("src", "img/play-black.svg");
  pauseImg.setAttribute("src", "img/pause-red.svg");
  stopImg.setAttribute("src", "img/stop-black.svg");
  clearInterval(contarSegundos);
  clearInterval(contarMinutos);
  clearInterval(contarHoras);
}

stopButton.addEventListener("click", stop);
function stop() {
  pausar();
  playImg.setAttribute("src", "img/play-black.svg");
  pauseImg.setAttribute("src", "img/pause-black.svg");
  stopImg.setAttribute("src", "img/stop-red.svg");
  segundos = 0;
  minutos = 0;
  horas = 0;
  contador.innerHTML = "00:00:00";
}
