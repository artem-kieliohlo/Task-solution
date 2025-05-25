// Создание хранилища данных на стороне клиента на основе localStorage
// Задача
// Сохранить данные, полученные при заполнении формы (или любые другие
// данные), таким образом, чтобы пользователи могли продолжать работать с ними
// с того места, на котором остановились в прошлый раз, в случае сбоя браузера, или
// если случайно закрыли окно, или прервалось соединение с интернетом.


const formFields = document.querySelectorAll(".input");


formFields.forEach((field) => {
  const savedValue = localStorage.getItem(field.id);
  if (savedValue) {
    field.value = savedValue;
  }


  field.addEventListener("input", handleFieldInput);
});


function handleFieldInput() {
  localStorage.setItem(this.id, this.value);
}
