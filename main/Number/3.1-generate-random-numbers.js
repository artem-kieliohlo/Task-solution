// Генерирование случайных чисел
// Задача
// Генерировать случайные целые числа, попадающие в определенный диапазон
// (например, от 1 до 6).
{
  let randomInRange = Math.ceil(Math.random() * 6);
}
{
  let rangeEnd = 6;
  let rangeStart = 1;
  let randomInRange = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
}
