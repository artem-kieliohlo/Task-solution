// Длинный опрос удаленного источника данных
// Задача
// Сделать так, чтобы соединение с сервером оставалось открытым и клиент мог
// сразу получать новую информацию, — но без WebSockets.

const url = 'http://localhost:8080/';

async function longPoll() {
  try {
    const response = await fetch(url);
    const message = await response.text();
    console.log(message);
    await longPoll();
  } catch (error) {
    console.log(`Request failed ${error}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await longPoll();
  }
}

longPoll();