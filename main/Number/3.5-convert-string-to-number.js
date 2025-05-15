// Преобразование строки в число
// Задача
// Проанализировать число, представленное в виде строки, и преобразовать эту
// строку в числовой тип данных.

{
  let inputString = "0";
  let convertedValue = Number(inputString);
  // eslint-disable-next-line no-unused-vars
  let finalResult = Number.isNaN(convertedValue) ? "не число" : convertedValue;
}
