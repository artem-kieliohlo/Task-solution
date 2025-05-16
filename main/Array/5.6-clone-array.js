// Клонирование массива
// Задача
// Создать копию существующего массива.

{
  const originalArray = [1, 2, 3, 4, [1, 2, 6, [3, 55], 2], 5];
  function cloneArr(currentArray) {
    const clonedArray = [];
    for (let index = 0; index < currentArray.length; index++) {
      if (!Array.isArray(currentArray[index])) {
        clonedArray[index] = currentArray[index];
      } else {
        clonedArray[index] = cloneArr(currentArray[index]);
      }
    }

    return clonedArray;
  }
  const result = cloneArr(originalArray);
  console.log(result);
}
