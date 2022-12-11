// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color
//  и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const body = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnEl.addEventListener("click", onBtnElClick);

function onBtnElClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}