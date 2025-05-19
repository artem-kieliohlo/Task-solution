"use strict";
// Запрет любых изменений объекта
// Задача
// У нас есть некий объект, и мы хотим сделать так, чтобы его свойства нельзя было
// переопределить или изменить в другом месте кода.

{
  const userDefaults = {
    name: "Artem",
    age: 28,
  };
  Object.freeze(userDefaults);
  userDefaults.age = 30;
  console.log(userDefaults);
}
