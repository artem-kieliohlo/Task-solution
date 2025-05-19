// Создание абсолютно уникальных ключей для свойств объекта
// Задача
// Добавить в объект свойство с уникальным именем и гарантировать, что никакое
// имя другого свойства не будет с ним конфликтовать.

{
  const userDefaults = {
    name: "Artem",
    age: 28,
  };
  let uniequeKey = Symbol("firstName");
  userDefaults[uniequeKey] = "Kelioglo";
  console.log(userDefaults);
}
