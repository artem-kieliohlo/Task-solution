self.onmessage = function (event) {
  if (event.data === "Start") {
    let result = 0;
    for (let index = 0; index < 10000; index++) {
      result++;
    }
    postMessage(result);
  }
};
