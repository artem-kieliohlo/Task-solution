// Проверка того, содержит ли строка заданную подстроку
// Задача
// Проверить, содержит ли строка другую строку.
{
  let firstString = "helloé";
  let secondString = "Helloé Artem";

  if (
    secondString
      .toLocaleLowerCase()
      .normalize()
      .search(firstString.toLocaleLowerCase().normalize()) >= 0
  ) {
    console.log("the string contains part of another string");
  } else {
    console.log("the string does not contain part of another string");
  }
}
// Альтернатива
{
  let firstString = "helloé";
  let secondString = "Helloé Artem";

  if (
    secondString
      .toLocaleLowerCase()
      .normalize()
      .includes(firstString.toLocaleLowerCase().normalize())
  ) {
    console.log("the string contains part of another string");
  } else {
    console.log("the string does not contain part of another string");
  }
}
