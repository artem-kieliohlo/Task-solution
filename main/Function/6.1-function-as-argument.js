// Передача одной функции в другую в качестве аргумента
// Задача
// При вызове функции необходимо передать другую функцию. Как лучше это
// сделать?

{
  function returnOne() {
    return 1;
  }
  function addOneToFunctionResult(func) {
    return 1 + func();
  }
  addOneToFunctionResult(returnOne);
}
