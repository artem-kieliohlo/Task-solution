// Создание функции с сохранением состояния посредством замыкания
// Задача
// Создать функцию, способную запоминать данные, не задействуя глобальные
// переменные и не пересылая постоянно одни и те же данные при каждом вызове
// функции.

{
  // Функция для создания счётчика с замыканием
  function createCounter() {
    let counterValue = 0;

    return function () {
      return counterValue++;
    };
  }

  let counterInstance = createCounter();
  counterInstance();
  counterInstance();
  counterInstance();
}
