// Сведение двумерного массива
// Задача
// Свести двумерный массив к одномерному списку.

{
  const nestedArray = [
    [12, 34, 56],
    [421, 35],
  ];
  const flattenedArray = nestedArray.flat(1);
  console.log(flattenedArray);
}
