"use strict";
// Перехват и изменение объектов
// с помощью прокси-объектов
// Задача
// Мы хотим написать код, в котором с объектом выполняются некие действия, но
// не хотим размещать этот код внутри объекта.

{
  let personProfile = {
    name: "Artem",
    age: 5,
    address: {
      country: "Ukraine",
      city: "Odesa",
    },
  };

  let proxy = new Proxy(personProfile, {
    get(target, prop, receiver) {
      console.log("receiver === proxy:", receiver === proxy);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      console.log(
        `Попытка изменить свойство "${String(prop)}" на значение "${value}"`
      );

      // Например, ограничим изменение возраста — только числа >= 0
      if (prop === "age") {
        if (typeof value !== "number" || value < 0) {
          console.warn("Некорректное значение возраста");
          return false; // отменяем установку
        }
      }

      // Используем Reflect.set для установки значения, учитывая receiver
      return Reflect.set(target, prop, value, receiver);
    },
  });

  let a = Object.create(proxy);
  a.age = 18;
  console.log(a.age);
  console.log(a);
  console.log(personProfile.age);
  console.log(personProfile);
  proxy.age = 27;
  console.log(proxy.age);
  console.log(proxy);
  console.log(personProfile.age);
  console.log(personProfile);
}
