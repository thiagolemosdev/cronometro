export default function initContador() {}

let contador = document.querySelector("[data-count]");
const play = document.querySelector("[data-play]");

let segundos = 0;
let minutos = 0;
let horas = 0;

let contarSegundos;
let contarMinutos;
let contarHoras;

play.addEventListener("click", comecar);
function comecar() {
  contarSegundos = setInterval(() => {
    segundos++;
    contador.innerHTML = `${("00" + horas).slice(-2)}:${("00" + minutos).slice(
      -2
    )}:${("00" + segundos).slice(-2)}`;
    console.log(contador);
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
