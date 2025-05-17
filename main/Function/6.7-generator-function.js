// Создание функции-генератора, которая возвращает несколько значений
// Задача
// Создать генератор — функцию, способную предоставлять несколько значений
// по требованию. Каждый раз, вернув значение, генератор приостанавливает
// выполнение, до тех пор пока вызывающий объект не запросит следующее
// значение.

{
  function* multiValueGenerator() {
    yield 1;
    let a = yield 2;
    console.log(a);
    yield 3;
    return 4;
  }
  let genInstance = multiValueGenerator();
  genInstance.next();
  console.log(genInstance.next().value);
  console.log(genInstance.next(24).value);
  console.log(genInstance.next().value);
  console.log(genInstance.next().value);
}
