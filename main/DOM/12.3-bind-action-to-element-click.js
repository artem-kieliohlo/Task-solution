// Привязка кэлементу действия в ответ на щелчок
// Задача
// Сделать так, чтобы при щелчке на кнопке, ссылке или другом элементе вебстраницы выполнялась определенная функция JavaScript.

let button = document.querySelector("button");

function handlerClick(event) {
  console.log("Нажат элемент:", event.target.tagName);
}
button.addEventListener("click", handlerClick);
