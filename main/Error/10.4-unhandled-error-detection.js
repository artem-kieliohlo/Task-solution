// Обнаружение необработанных ошибок
// Задача
// Перехватывать ошибки, которые не были обработаны в коде, — возможно, для
// записи в журнал диагностики.

{
  window.onerror = function (message, source, lineno, colno, error) {
    console.log("massage:" + message);
  };
}
