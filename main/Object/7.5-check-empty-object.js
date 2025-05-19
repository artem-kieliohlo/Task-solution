// Проверка того, является ли объект пустым
// Задача
// Определить, пуст ли объект (данный объект не имеет свойств).

{
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  const emptyObject = {};
  const nonEmptyObject = { x: 2, y: 3 };

  console.log(isEmptyObject(emptyObject));    // true
  console.log(isEmptyObject(nonEmptyObject)); // false
}
