// Использование метода XMLHttpRequest
// Задача
// Приложение должно запрашивать удаленные данные и поддерживать старые
// браузеры.

let url = "https://jsonplaceholder.typicode.com/todos/1";

let request = new XMLHttpRequest();
request.open("GET", url);
request.send();

request.onload = () => {
  if (request.status > 200 && request.status < 400) {
    let data = JSON.parse(request.response);
    console.log(data);
  } else {
    console.log(`${request.statusText}: ${request.status} error`);
  }
};

request.onerror = () => console.log(request.statusText);
