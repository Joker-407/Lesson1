import {form, renderHeader,renderMessage } from "./common.js";
const dateSwitch = document.querySelector('.turnDate');
const timerSwitch = document.querySelector('.turnTimer');
const timer = document.getElementById('timer');

dateSwitch.addEventListener('click', (event) =>{
    event.preventDefault();
    renderHeader('Калькулятор дат')
    timer.style.display='none'
    form.style.display='block';
    renderMessage('Расчёт');
})
timerSwitch.addEventListener('click', (event) =>{
    event.preventDefault();
    renderHeader('Таймер')
    form.style.display='none';
    timer.style.display='block';
    renderMessage("Введите количество");
})