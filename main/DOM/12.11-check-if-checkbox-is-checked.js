// Проверка того, установлен ли флажок
// Задача
// Проверить, установил ли пользователь флажок в приложении. [type='checkbox']

let input = document.querySelector("input[type='checkbox']");
if (input.checked) {
  console.log("input.checked : true");
} else {
  alert("Поле подтверждения обязательно, для продолжения");
}
