//  Точный поиск элементов массива
// Задача
// Найти в массиве определенное значение. Иногда достаточно лишь узнать, есть
// ли оно в массиве, а иногда нужно получить его позицию.

{
  const numbers = [1, 4, 6, 7, 2, 8];
  const target = 4;
  const foundValue = numbers.find((value) => value === target);
  const isPresent = numbers.includes(target);
  const foundIndex = numbers.indexOf(target);
  
  console.log(foundValue, isPresent, foundIndex);
}
