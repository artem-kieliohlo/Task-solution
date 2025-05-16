// Вычисление длины дуги окружности
// Задача
// Заданы радиус окружности и угол дуги в градусах. Нужно найти длину дуги.

{
  function arcLength(degrees, radius, measurementSystem) {
    const radians = (degrees * Math.PI) / 180;
    const length = radius * radians;
    const roundedLength = length.toFixed(2);
    return `${roundedLength}${measurementSystem}`;
  }

  console.log(arcLength(90, 5, "cm"));
}
