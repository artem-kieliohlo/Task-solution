// Создание произвольного класса посредством шаблона «Конструктор»
// Задача
// Создать классоподобную сущность, пригодную для многократного использования в коде. Для этого имеет смысл применить традиционный шаблон разработки
// «Конструктор», так как он подходит к уже существующему коду.

{
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.fullName = function (firstName) {
    return `${this.name} ${firstName}`;
  };
  let user = new Person("Artem", 27);
  console.log(user.fullName("Kelioglo"));
  console.log(user);
}
