"use strict";
// Проверка того, что строка существует и она не пустая
// Задача:
// Перед использованием переменной убедиться, что она определена, является
// строкой и непустая.

{
  let unknownVariable = "Artem";
  if (typeof unknownVariable === "string" && unknownVariable.length > 0) {
    console.log(unknownVariable);
  } else {
    console.log("unknownVariable -   empty");
  }
}
// улучшение
{
  let unknownVariable = "Artem";
  if (
    Object.prototype.toString.call(unknownVariable).slice(8, -1) &&
    unknownVariable.trim().length > 0
  ) {
    console.log(unknownVariable);
  } else {
    console.log("unknownVariable -   empty");
  }
}
// Альтернатива:
{
  let unknownVariable = "Artem";
  if (typeof unknownVariable === "string" && Boolean(unknownVariable.trim())) {
    console.log(unknownVariable);
  } else {
    console.log("unknownVariable - empty");
  }
}
