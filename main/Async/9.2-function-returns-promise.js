// Использование функции, которая возвращает промис
// Задача
// Выполнить код после завершения асинхронной задачи(успешного или неудачного).
// Получить сообщение о завершении задачи с помощью объекта Promise.

{
  function doAsyncTask(success = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("задача выполнена");
        } else {
          reject("Произошла ошибка");
        }
      }, 1000);
    });
  }
  doAsyncTask(false)
    .then((result) => console.log(result))
    .catch((e) => console.error(e));
}
