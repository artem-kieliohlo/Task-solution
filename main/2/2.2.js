// Преобразование числового значенияв форматированную строку
// Задача
// Создать строковое представление числа.

{
  let number = new Number(2);
  let numberToString = String(number);
  console.log(numberToString);
}
{
  let number = 8;
  let numberToString = number.toString();
  console.log(numberToString);
}
{
  let number = 84;
  let numberToString = number + "";
  console.log(numberToString);
}
{
  let number = 42;
  let numberToString = `${number}`;
  console.log(numberToString);
}
