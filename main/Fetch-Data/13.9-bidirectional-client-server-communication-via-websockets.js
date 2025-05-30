// Двунаправленный обмен данными между клиентом и сервером посредством WebSockets
// Задача
// Организовать двунаправленный обмен данными между сервером и клиентской
// веб-страницей в режиме реального времени.

const socket = new WebSocket('ws://localhost:8080');
socket.onmessage = event => {
  const msg = JSON.parse(event.data);
  msg.counter = Number(msg.counter) + 1;
  msg.strng += `${msg.counter}-`;
  const html = `<p> ${msg.strng} </p>`;
  document.getElementById('output').innerHTML = html;
  socket.send(JSON.stringify(msg));
};