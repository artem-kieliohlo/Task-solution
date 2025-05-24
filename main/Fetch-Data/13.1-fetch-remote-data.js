// Запрос удаленных данных с помощью Fetch API
// Задача
// Запросить данные с удаленного сервера.

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

let url = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchRequest(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

fetchRequest(url);
