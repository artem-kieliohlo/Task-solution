// Объединение свойств двух объектов
// Задача
// Есть два простых объекта, каждый — со своими свойствами. Мы хотим объединить
// их данные в один объект.

{
  const userDefaults = {
    name: "Artem",
    age: 28,
  };

  const overrideData = {
    age: 27,
  };

  const mergedWithMutation = Object.assign({}, userDefaults, overrideData);
  console.log(mergedWithMutation); // { name: 'artem', age: 27 }

  const mergedClean = { ...userDefaults, ...overrideData };
  console.log(mergedClean); // { name: 'artem', age: 27 }
}
