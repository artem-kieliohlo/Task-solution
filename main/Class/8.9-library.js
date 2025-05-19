export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `I am ${this.name}, ${this.age} years old.`;
  }
}
