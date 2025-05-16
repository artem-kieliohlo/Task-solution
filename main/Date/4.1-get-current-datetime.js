// Получение текущих даты и времени
// Задача
// Получить текущие дату и время.
{
  let currentDateTime = new Date().toLocaleString("ru-RU", {
    dateStyle: "full",
    timeStyle: "full",
    hourCycle: "h24",
  });
  console.log(currentDateTime);
}
