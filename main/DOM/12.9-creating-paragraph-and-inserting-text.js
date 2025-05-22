// Создание абзаца и вставка в него текста
// Задача
// Создать новый абзац с текстом и вставить его в документ.

let main = document.querySelector("main");
let paragraph = document.createElement("p");
paragraph.textContent = "Hello world!";
main.appendChild(paragraph);
