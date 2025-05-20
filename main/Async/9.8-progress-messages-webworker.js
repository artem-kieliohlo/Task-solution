// Поддержка сообщений о ходе выполнениязадач вWeb Worker
// Задача
// Сделать так, чтобы Web Worker сообщал о ходе выполнения задач.

const worker = new Worker("worker.js");

worker.onmessage = function (event) {
  const msg = event.data;

  if (msg.progress !== undefined) {
    console.log(`Прогресс: ${msg.progress.toFixed(2)}%`);
  }

  if (msg.done) {
    console.log(`Задача завершена. Результат: ${msg.result}`);
    worker.terminate(); // завершаем воркера
  }
};

worker.onerror = function (error) {
  console.error("Ошибка воркера:", error.message);
};

// Отправляем сообщение воркеру для запуска задачи
worker.postMessage("start");
