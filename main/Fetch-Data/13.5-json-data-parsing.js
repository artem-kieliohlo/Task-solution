// Синтаксический анализ данных, полученных в формате JSON
// Задача
// Надежно преобразовывать данные в формате JSON в объекты JavaScript. При
// этом заменять числовое представление true и false (1 и 0 соответственно) на
// аналоги типа Boolean (true и false).

let json = '{"x": 2,"y": 4,"z": 0}';

let result = JSON.parse(json, (key, value) => {
  if (typeof value === "number") {
    if (value === 0) value = false;
    if (value === 1) value = true;
  }
  return value;
});

console.log(result);
