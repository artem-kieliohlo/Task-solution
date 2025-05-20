// Обновление страницы в цикле
// Задача
// Обновить страницу во время выполнения длительной операции с высокой нагрузкой на процессор,
// так чтобы браузер не перерисовывал окно, пока оно занято

{
  function doWorkInChunks() {
    const statusElement = document.querySelector("#status");
    const nowTime = Date.now();
    statusElement.textContent = "Start";
    let count = 0;
    const doChunkedTask = () => {
      if (Date.now() - nowTime < 10000) {
        count++;
        statusElement.textContent = `Just generated number ${count}`;
        setTimeout(doChunkedTask, 0);
      } else {
        statusElement.textContent = "Finish";
      }
    };
    doChunkedTask();
  }
  doWorkInChunks();
}
