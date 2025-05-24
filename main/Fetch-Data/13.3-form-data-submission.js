// Отправка данных формы
// Задача
// Передать данные формы от клиента на сервер.

const myForm = document.querySelector("#my-form");
const url = "http://localhost:8080/";
myForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let form = new FormData(myForm);
  let response = await fetch(url, {
    method: "post",
    body: form,
  });
  const result = await response.text();
  alert(result);
});
