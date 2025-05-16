
// Представление даты в виде форматированной строки
// Задача
// Преобразовать объект Date в форматированную строку.

// Решение:
const now = new Date();
function pad(num) {
  return num.toString().padStart(2, '0');
}
const day = pad(now.getDate());
const month = pad(now.getMonth() + 1);
const year = now.getFullYear();
const hours = pad(now.getHours());
const minutes = pad(now.getMinutes());
const seconds = pad(now.getSeconds());
const formatted = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
console.log(formatted);

