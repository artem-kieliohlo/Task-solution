// Преобразование строки в дату
// Задача
// Есть информация о дате, представленная в виде строки. Мы хотим преобразо-
// вать ее в объект Date, чтобы потом манипулировать им в коде или вычислять
// даты.

{
  let dateString = " 01.12.2024";
  let timestamp = Date.parse(dateString);
  if (Number.isNaN(timestamp)) {
    console.log("Неверный формат");
  } else {
    let parsedDate = new Date(timestamp);
    console.log(parsedDate);
  }
}

{
  let dateString = " 01/12/2024";
  let dateParts = dateString.split("/");
  let day = dateParts[1];
  let month = dateParts[0];
  let year = dateParts[2];
  let parsedDate = new Date(year, month - 1, day);

  console.log(parsedDate);
}
