// Валидация данных формы
// Задача
// Веб - приложение получает данные от пользователей через формы HTML.Но прежде чем передавать данные на сервер, нужно
// убедиться, что они верны, полны и валидны, после чего предоставить пользователю обратную связь.

let form = document.querySelector("#form");
let inputs = form.querySelectorAll("input");
let button = document.querySelector("#form-button");

button.addEventListener("click", (evt) => {
  evt.preventDefault();

  inputs.forEach((input) => {
    let value = input.value.trim();

    if (value === "") {
      input.setCustomValidity("Поле не должно быть пустым");
    } else if (value.length > 20) {
      input.setCustomValidity(
        "Значение слишком длинное (максимум 20 символов)"
      );
    } else {
      input.setCustomValidity(""); 
    }

    input.reportValidity();
  });
});
