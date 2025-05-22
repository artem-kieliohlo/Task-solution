// Присвоение элементу атрибута style
// Задача
// Добавить или удалить встроенный стиль для заданного элемента.

let button = document.querySelector(".send");
button.style.color = "red";
button.setAttribute("style", " color:black");
button.style.cssText = " background-color: yellow";
