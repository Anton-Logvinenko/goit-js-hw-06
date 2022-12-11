// Счетчик состоит из спана и кнопок, которые, при клике,
//  должны увеличивать и уменьшать его значение на единицу.
//  Создай переменную counterValue в которой будет храниться текущее значение счетчика
//  и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('[ data-action="decrement"]');
const incrementBtn = document.querySelector('[ data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);
function onDecrementBtnClick() {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log(value.textContent);
}

incrementBtn.addEventListener("click", onIncrementBtnClick);
function onIncrementBtnClick() {
  counterValue += 1;
  value.textContent = counterValue;
  console.log(value.textContent);
}
