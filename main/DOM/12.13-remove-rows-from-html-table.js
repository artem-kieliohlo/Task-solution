// Удаление строк из таблицы HTML
// Задача
// Удалить из таблицы HTML одну или несколько строк.

let table = document.querySelector("table");
let rows = table.querySelectorAll("tr");
if (rows[2]) {
  rows[2].remove(); // удаляем третью строку
}
