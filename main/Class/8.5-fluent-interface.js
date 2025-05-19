// Создание возможности для объединения
// методов класса в цепочку
// Задача
// Определить методы класса таким образом, чтобы можно было вызывать их цепочкой, в одном выражении.

// Класс с поддержкой цепочки вызовов методов (method chaining)
class Person {
  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }

  setName(newName) {
    this.name = newName;
    return this; 
  }

  setAge(newAge) {
    this.age = newAge;
    return this;
  }

  celebrateBirthday() {
    this.age += 1;
    return this;
  }

  printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    return this;
  }
}


let user = new Person("Artem");

user.setName("Artem Kelioglo").celebrateBirthday().setAge(30).printInfo();
