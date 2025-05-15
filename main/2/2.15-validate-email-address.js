// Валидация адреса электронной почты
// Задача
// Обнаруживать типичные ошибки в адресах электронной почты и отклонять
// такие адреса.

let validEmail = "artem@gmail.com";
let invalidEmail = "artemgmailcom";
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test(validEmail));
console.log(emailPattern.test(invalidEmail));

