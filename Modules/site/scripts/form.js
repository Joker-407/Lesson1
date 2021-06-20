import {form,renderMessage, renderDates} from'./common.js';
import {diffDates} from './date.js';

const message = document.querySelector('.message');
form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    const date1 = evt.target.elements.date1.value;
    const date2 = evt.target.elements.date2.value;
    if (!date1 || !date2){
        renderMessage('Введите оба значения');
        return;
    };
    console.log(diffDates(date1,date2));
    const result = diffDates(date1,date2);
    renderDates(result);
})