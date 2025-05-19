// Наследование функционала другого класса
// Задача
// Создать произвольный класс, который бы наследовал функции другого класса.

{
  
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old.`;
  }
}


class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); 
    this.position = position;
  }

  work() {
    return `${this.name} is working as a ${this.position}.`;
  }
}

// Тестирование
const developer = new Employee("Artem", 27, "Frontend Developer");

console.log(developer.introduce()); 
console.log(developer.work());      

}