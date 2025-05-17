// Фиксация this посредством привязки функций
// Задача
// Функция пытается применить ключевое слово this, но оно привязано не к тому
// объекту.

{
  function getAge() {
    console.log(this.age);
    return this.age;
  }

  let person = {
    name: "Artem",
    age: 18,
  };

  let getAgeBoundToPerson = getAge.bind(person);
  console.log(getAgeBoundToPerson());
}
