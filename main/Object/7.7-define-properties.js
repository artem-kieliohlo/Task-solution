// Выбор способа определения свойств
// Задача
// Добавить новое свойство в объект легко. Но иногда нужно явно изменить свойство
// таким образом, чтобы лучше контролировать способы его применения.

{
  const userDefaults = {
    name: "Artem",
    age: 28,
  };
  Object.defineProperty(userDefaults, "age", {
    writable: false,
    configurable: false,
    enumerable: false,
  });
  userDefaults.age = 27;
  console.log(userDefaults.age);
}
