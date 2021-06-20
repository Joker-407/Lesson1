import { renderMessage } from "./common.js";
import './howler.js-master/dist/howler.js'
const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
const timeInput = document.getElementById('time');
let time = null;
let count = null;
var sound = new Howl({
    src: ['../mp3/ending-sound-effect.mp3']
});
function timer(){
    if (time <= 0){
        clearInterval(count);
        renderMessage('Отчёт окончен');
        sound.play();
        return
    }
    let seconds = time%60;
    let minutes = (time - (time%60))/ 60;
    renderMessage(`Минут ${minutes}: секунд: ${seconds}`);
    --time;
};
buttonStart.addEventListener('click', (event)=>{
    event.preventDefault();
    time = 0;
    time = parseInt(timeInput.value);
    if (isNaN(time)){
        renderMessage('Нужно ввести число');
        return
    }
    count = setInterval(timer, 1000);
    buttonStart.style.display = 'none';
    buttonStop.style.display = 'inline';  
});
buttonStop.addEventListener('click', (event)=>{
    event.preventDefault();
    buttonStop.style.display = 'none';  
    buttonStart.style.display = 'inline';
    clearInterval(count);
    renderMessage("Введите количество секунд");
});