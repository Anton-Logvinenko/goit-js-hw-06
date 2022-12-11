// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
// один параметр - число.
// Функция создает столько <div>,
// сколько указано в amount и добавляет их в div#boxes.

//1. Размеры самого первого <div> - 30px на 30px.
// 2.Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3.Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("input");
const btnCreat = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

inputNumber.addEventListener("input", onInputNumber);

function onInputNumber() {
  let amount = inputNumber.value;

  btnCreat.addEventListener("click", onBtnCreat);

  function onBtnCreat() {
    createBoxes(amount);
    function createBoxes(amount) {
      const newDiv = document.createElement("div");
      // console.log(newDiv);

      boxes.append(newDiv);

      // Стили
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.border = "solid";
      newDiv.style.borderWidth = "2px";
      newDiv.style.marginTop = "10px";

      // console.log(amount);

      newDiv.style.width = `${20 + amount * 10}px`;
      newDiv.style.height = `${20 + amount * 10}px`;
    }
  }
}

// Очистить колекцию
btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
