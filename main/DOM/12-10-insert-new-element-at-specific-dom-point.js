// Вставка нового элемента в определенной точке DOM
// Задача
// Вставить новый абзац перед третьим абзацем внутри элемента div.

let div = document.querySelector("div");
let p = document.createElement("p");
let child = div.children;
div.insertBefore(p, child[2]);
