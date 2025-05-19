// Клонирование объектов
// Задача
// Создать точную копию произвольного объекта.

{
  let personProfile = {
    name: "Artem",
    age: 27,
    address: {
      country: "Ukraine",
      city: "Odesa",
    },
  };
  let myPerson = { ...personProfile };
  console.log(myPerson);
}
