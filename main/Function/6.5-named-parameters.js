// Использование именованных параметров функции
// Задача
// Найти более простой способ выбирать, какие именно необязательные параметры
// будут переданы в функцию.

{
  function createUser({
    name = "Unknown",
    age = 18,
    email = "example@gmail.com",
  } = {}) {
    return {
      name,
      age,
      email,
    };
  }
  console.log(createUser({ name: "Artem", age: 19 }));
  console.log(createUser({}));
}
