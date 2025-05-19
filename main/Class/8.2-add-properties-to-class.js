// Добавление в класс новых свойств
// Задача
// Создать в классе геттеры и сеттеры свойств в качестве оберток для содержимого
// класса.

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get fullName() {
      return `${this._name} Kelioglo`;
    }
    set name(value) {
      if (typeof value === "string") {
        this._name = value;
      } else {
        throw Error("Введите строку");
      }
    }
  }

  let newPerson = new Person("Artem", 27);
  console.log(newPerson.fullName);
  newPerson.name = "Nick";
}

