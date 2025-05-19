// Создание объектов посредством статических методов
// Задача
// Создать метод, который генерировал бы объект определенной конфигурации, —
// возможно, чтобы обойти таким образом ограничение JavaScript на единственный
// конструктор класса.

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    static cloneWithNewAge(existingPerson, newAge) {
      return new Person(existingPerson.name, newAge);
    }
  }

  const user1 = new Person("Artem", 27);
  console.log(user1);

  const user2 = Person.cloneWithNewAge(user1, 30);
  console.log(user2); 
}
