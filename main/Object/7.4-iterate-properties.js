// Перебор всех свойств объекта
// Задача
// Исследовать все свойства объекта.

{
  let personProfile = {
    name: "Artem",
    age: 27,
    address: {
      country: "Ukraine",
      city: "Odesa",
    },
  };
  let property = Object.keys(personProfile);
  for (let key of property) {
    console.log(key);
  }
  for (const key in personProfile) {
    console.log(key);
  }
  console.log(Object.getOwnPropertyNames(personProfile));
  console.log(Object.getOwnPropertyDescriptors(personProfile));
}
