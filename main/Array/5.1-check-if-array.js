// Проверка того, является ли объект массивом
// Задача
// Перед выполнением операции с массивом имеет смысл убедиться, что данный
// объект действительно является массивом.
{
  let arr = [1, 2, 4];
  if (Array.isArray(arr)) {
    console.log("это массив");
  } else {
    console.log("это не массив");
  }
}
