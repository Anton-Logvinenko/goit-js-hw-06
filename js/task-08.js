// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери значения полей
//  в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
//  Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и
// очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
// console.dir(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("Заповніть всі поля форми !");
  }
  const dataUser = { emai: email.value, password: password.value };
  console.log(dataUser);

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((valueEl, nameEl) => {
  //     console.log(nameEl, `:`, valueEl);
  //   });
  event.currentTarget.reset();
}
