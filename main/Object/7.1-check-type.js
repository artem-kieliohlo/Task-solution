// Проверка того, относится ли объект кзаданному типу
// Задача
// Есть некий таинственный объект, и мы хотим определить, к какому типу он относится

{
  let primitiveValue = 5;

  let coordinatePoint = {
    x: 2,
    y: 3,
  };

  console.log(primitiveValue instanceof Number);
  console.log(coordinatePoint instanceof Object);

  console.log(Object.prototype.toString.call(primitiveValue).slice(8, -1));
}
