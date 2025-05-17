// Удаление и замена элементов массива
// Задача
// Найти все элементы массива, равные заданному значению, и удалить их либо
// заменить на что-то другое.

{
  const array = [1, 2, 3, 4, 5, 4, 4, 6, 6];
  function replaceOrRemoveElements(
    inputArray,
    removeValue = undefined,
    replaceValue = undefined
  ) {
    if (removeValue === undefined) {
      throw Error(" Отсутствует  значение  для удаления");
    }
    let resultArray = [];
    if (removeValue) {
      resultArray = inputArray.map((item) => {
        return item === removeValue ? replaceValue : item;
      });
    }

    if (removeValue && !replaceValue) {
      resultArray = inputArray.filter((item) => item !== removeValue);
    }
    return resultArray;
  }
  console.log(replaceOrRemoveElements(array, 4, 2));
}
