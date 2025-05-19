// Проверка существования свойства у объекта
// Задача
// В процессе выполнения программы проверить, есть ли у объекта данное свойство.

{
  let personProfile = {
    name: "Artem",
    age: 27,
    address: {
      country: "Ukraine",
      city: "Odesa",
    },
  };
  console.log(personProfile?.post)
  console.log('post' in personProfile)
}