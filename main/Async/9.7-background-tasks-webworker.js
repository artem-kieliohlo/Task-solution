// Выполнение фоновых задач с помощью Web Worker
// Задача
// Выполнить код, требующий значительного времени, в отдельном потоке, чтобы
// он не блокировал пользовательский интерфейс.

const worker = new Worker("./9.7-worker-module.js");
worker.onmessage = function (mes) {
  console.log("first", mes.data);
};
worker.postMessage("Start");
worker.onerror = function (err) {
  console.log(err.message);
};
