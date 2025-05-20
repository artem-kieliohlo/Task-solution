// Замена асинхронной функции с обратным вызовом на промис
// Задача
// Заменить асинхронную функцию с обратным вызовом на промис.

{
  function asyncWithCallback(data, callback) {
    setTimeout(() => {
      if (data) {
        callback(null, `Данные получены: ${data}`);
      } else {
        callback("Ошибка: нет данных");
      }
    }, 1000);
  }
}

{
  function asyncWithPromise(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(`Данные получены: ${data}`);
        } else {
          reject("Ошибка: нет данных");
        }
      }, 1000);
    });
  }
  asyncWithPromise("Тест")
    .then((result) => {
      console.log("✅", result);
    })
    .catch((error) => {
      console.error("❌", error);
    });

  // Пример с ошибкой
  asyncWithPromise("")
    .then((result) => {
      console.log("✅", result);
    })
    .catch((error) => {
      console.error("❌", error);
    });
}
