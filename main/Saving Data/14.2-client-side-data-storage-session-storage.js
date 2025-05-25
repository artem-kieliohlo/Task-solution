// Хранение данных на стороне клиента с помощью sessionStorage
// Задача
// Нам нужен удобный способ сохранять информацию в течение всей сессии без
// ограничения размера и межстраничного загрязнения, свойственного cookies.

sessionStorage.setItem("name", "Artem");
console.log(sessionStorage.getItem("name"));
