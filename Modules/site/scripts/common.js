const message = document.querySelector('.message');
const header = document.querySelector('h1');
export const form = document.getElementById('form');
export function renderMessage(text){
    message.textContent = text;
}
export function renderDates (result){
    message.innerHTML =`
    <span>Годы:${result.years}</span>
    <span>Месяцы:${result.months}</span>
    <span>Дни:${result.days}</span>
    `
}
export function renderHeader(text){
    header.innerText = text;
}