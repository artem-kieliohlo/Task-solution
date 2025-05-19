// Создание статических методов класса
// Задача
// Написать привязанную к классу утилиту, которую можно было бы вызывать, не
// создавая объект этого класса.

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    static greet() {
      console.log("Hello from Person class!");
    }
  }

  Person.greet();
}
