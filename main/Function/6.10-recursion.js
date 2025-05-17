// Реализация рекурсивного алгоритма
// Задача
// Создать функцию, которая для выполнения некоторой задачи вызывала бы
// сама себя. Такая технология называется рекурсией. Она бывает полезна в ра-
// боте с иерархическими структурами данных (например, деревьями узлов или
// встроенными массивами), в некоторых типах алгоритмов (таких как сортировка)
// и для некоторых математических вычислений (таких как последовательность
// Фибоначчи).

{
  function reverseString(str) {
    if (str.length <= 1) {
      return str;
    }

    return reverseString(str.slice(1)) + str[0];
  }

  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("JavaScript")); // "tpircSavaJ"
  console.log(reverseString("a")); // "a"
  console.log(reverseString("")); // ""
}
