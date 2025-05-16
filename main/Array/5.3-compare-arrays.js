// Проверка равенства двух массивов
// Задача
// Найти простой способ проверки того, равны ли два массива между собой, то есть
// одинаково ли их содержимое.

{
  let firstArray = [1, 2, 3, 4.5, 5];
  let secondArray = [1, 2, 3, 4, 5];
  function areArraysEqual(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) return "массивы не равны";
    for (let [key, value] of arrayA.entries()) {
      if (value !== arrayB[key]) return "массивы не равны";
    }

    return "массивы равны";
  }
  console.log(areArraysEqual(firstArray, secondArray));
}
