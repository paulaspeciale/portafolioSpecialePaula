const ciclos = document.getElementById('ciclos');
const ciclosContainer = document.getElementById('ciclos-container');
const countdown = document.querySelector('.countdown');
const timerDisplay = document.getElementById('countdown-text');
const descanso = document.getElementById('descanso');
let startingSeconds = 0;
let descansoSegundos = 10*60
const descansos =[]

function handleCicloClick(event) {
  const ciclo = event.target.value;
 //console.log(typeof Number(ciclo))
 this.disabled = true;
 ciclosContainer.style.display = 'none';
 countdown.style.display = 'block';
 startingSeconds = Number(ciclo)*60*60;
 //console.log(startingSeconds)
 timerDisplay.textContent = "00:00:00";
const countdownInterval = setInterval(updateCountdown, 1000);
let descansoInterval;// = setInterval(descansos, 1000);
descansosCalc(Number(ciclo))
}
ciclos.addEventListener('change', handleCicloClick);

//const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  startingSeconds--;
  
  timerDisplay.textContent =  secondsToHms(startingSeconds)
 //timerDisplay.textContent = formatTime(startingSeconds);
 
  if (descansos.includes(startingSeconds)) {
    /* necesito un coutndown de 5 minutos */
    descansoInterval= setInterval(descansosDisplay, 1000);
    descansosDisplay()
  }
if (startingSeconds <= 0) {
    clearInterval(countdownInterval);
    alert('¡Tiempo terminado!');
  }
  
}
function descansosDisplay(){
descansoSegundos--;
descanso.style.display = 'block';
descanso.textContent =  secondsToHms(descansoSegundos)
if (descansoSegundos <= 0) {
    descanso.style.display = 'none';
    descansoSegundos = 10*60 
     clearInterval(descansoInterval)
}
}
function secondsToHms(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Use padStart to ensure two digits for minutes and seconds
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    // The hours part can be more than 24
    return `${hours}:${formattedMinutes}:${formattedSeconds}`; 
}
function descansosCalc(horas) {
   
    console.log("horas - descansos:", horas)
   let horasRestantes = horas;
   let segundosTotales= horas*60*60
   //console.log(segundosTotales)
   /** revisar, el for hacerlo del total de horas e ir restando hacia abajo , restarle los 50 min en segundos a cada hora */
   for (let i = horas; i >=1; i--) {
   // console.log(segundosTotales)
    let descansoTime = segundosTotales - 3000;
    segundosTotales-=3600
    console.log(descansoTime) // Descanso cada 10 minutos
    if (descansoTime >0) {
        descansos.push(descansoTime);
    }
   }    
  console.log("descansos en segundos:", descansos) 
}
/*
1 horas ->  50 + 10 -> 3000 + 600
2 horas ->   60 + 50 + 10 -> 3600 + 3000 + 600 -> 6600 
3 horas ->   60 + 60 + 50 + 10 -> 3600 + 3600 + 3000 + 600
 600
 4200
 7800
*/