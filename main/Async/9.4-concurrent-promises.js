// Конкурентное выполнение нескольких промисов
// Задача
// Выполнить несколько промисов одновременно, а когда все они завершат работу,
// сообщить об этом.

{
  let a = new Promise((res) => {
    setTimeout(() => res("HI"), 1000);
  });
  let b = new Promise((res) => {
    setTimeout(() => res("HII"), 1500);
  });
  let c = new Promise((res) => {
    setTimeout(() => res("HIII"), 500);
  });

  Promise.all([a, b, c])
    .then((results) => {
      console.log("✅ Все промисы завершены:");
      console.log(results); // ["HI", "HII", "HIII"]
    })
    .catch((err) => {
      console.error("❌ Один из промисов завершился с ошибкой:", err);
    });
}
