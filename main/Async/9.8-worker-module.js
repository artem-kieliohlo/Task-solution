self.onmessage = function(event) {
  if (event.data === 'start') {
    let total = 10000;
    let result = 0;

    for (let i = 0; i < total; i++) {
      result++;

      
      if (i % 1000 === 0) {
        self.postMessage({ progress: (i / total) * 100 }); 
      }
    }

    
    self.postMessage({ done: true, result });
  }
};
