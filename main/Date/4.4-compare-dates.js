// Сравнение дат и проверка двух дат на равенство
// Задача
// Убедиться, что два объекта Date описывают одну и ту же календарную дату, или
// определить, что одна дата является более ранней, чем другая.

{
  let referenceDate = new Date(2024);
  let currentDate = new Date();

  if (referenceDate.toDateString() === currentDate.toDateString()) {
    console.log("Даты равны");
  } else if (referenceDate.getTime() < currentDate.getTime()) {
    console.log("первая дата меньше второй");
  } else {
    console.log("первая дата больше второй");
  }
}
