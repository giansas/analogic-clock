//  montando relogio digital
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//  function para atualizar o relogio
function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    //  calculando angulo equivalente aos segundos
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    //  1 dia tem 24 horas, mas o relogio gira 2 vezes de 12 horas
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    //  se menor que 10, vai ter o ZERO antes
    //  se TIME < 10, acrescente um zero em TIME, :(senão) retorne o time
    return time < 10 ? `0${time}` : time;

/* //  equivale a este if else
    if(time < 10){
        return '0'+time;
    } else {
        return time;
    }
    */
}

//  atualiza relogio a cada 1 segundo
setInterval(updateClock, 1000);
//  efeito de atualização imediato
updateClock();