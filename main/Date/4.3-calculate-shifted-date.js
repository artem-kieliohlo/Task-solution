// Добавляем дни к дате
// Задача
// Вычислить дату, которая отстоит от другой даты на заданное число дней вперед
// или назад.

{
  let today = new Date();
  let currentDay = today.getDate();
  today.setDate(currentDay + 14);
  console.log(today);
}
