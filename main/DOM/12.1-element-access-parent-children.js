"use strict";
// Доступ к определенному элементу, поискего родительского и дочерних элементов
// Задача
// Получить доступ к определенному элементу веб-страницы, найти его родительский и дочерние элементы.

let element = document.querySelector("section");
let parent = element.parentElement;
let children = element.children;
console.log(element);
console.log(parent);
console.log(children);
