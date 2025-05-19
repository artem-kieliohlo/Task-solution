// Создание класса для многократного
// использования
// Задача
// Создать многократно применяемый шаблон для произвольных объектов

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  class Father extends Person {
    constructor(name, age) {
      super(name, age);
      this.children = [];
    }
    addChild(child) {
      this.children.push(child);
    }
  }
  class Son extends Person {
    constructor(name, age, father = null) {
      super(name, age);
      this.father = father;
    }
  }
  let dad = new Father("Alex", 48);
  let son = new Son("Artem", 27, dad);

  dad.addChild(son);

  console.log(dad);
  console.log(son);
}
