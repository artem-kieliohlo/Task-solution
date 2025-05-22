// Перебор результатов, полученныхот querySelectorAll(), с помощью forEach()
// Задача
// Перебрать в цикле содержимое объекта nodeList, полученного при вызове
// querySelectorAll().

let elements = document.querySelectorAll("p");
elements.forEach((element) => {
  console.log(element);
});
