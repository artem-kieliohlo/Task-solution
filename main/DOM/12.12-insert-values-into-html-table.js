// // Вставка значений в таблицу HTML
// // Задача
// // Вычислить сумму всех чисел в столбце таблицы.
let allTr = document.querySelector("table tr");
let countCollum = allTr ? allTr.querySelectorAll("td, th").length : 0;
let allTd = document.querySelectorAll("table td");

let collum = 1;

if (collum < 1 || collum > countCollum) {
  console.log("Такой столбца не существует");
} else {
  let sum = 0;
  for (let index = collum - 1; index < allTd.length; index += countCollum) {
    sum += Number(allTd[index].textContent.trim());
  }
  console.log(sum);
}
// Альтернатива
let sum = 0;
// С помощью querySelectorAll получаем все вторые ячейки таблицы
const cells = document.querySelectorAll("td:nth-of-type(1)");
// Перебираем полученные ячейки

cells.forEach((cell) => {
  sum += Number.parseFloat(cell.firstChild.data);
});
console.log(sum);
