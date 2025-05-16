// Слияние двух массивов
// Задача
// Объединить два массива в новый массив.
{
  const firstArray = [2, 53, 23];
  const secondArray = [2, 3, 867];
  const mergedArray = [...firstArray, ...secondArray];
  console.log(mergedArray);
}
// Объединить два массива в новый массив.
{
  const firstArray = [2, 53, 23];
  const secondArray = [2, 3, 867];
  const mergedArray = firstArray.concat(secondArray);
  console.log(mergedArray);
}
