// Улучшенное строковое представление класса
// Задача
// Подобрать подходящее текстовое представление, которое будет использоваться
// в ходе преобразования объекта в строку.

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    toString() {
      return `Person: ${this.name}, age - ${this.age} `;
    }
  }
  const person = new Person("Artem", 27);

  console.log(person);
  console.log(String(person));
  console.log(`${person}`);
}
