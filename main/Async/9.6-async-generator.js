// Создание асинхронной функции-генератора
// Задача
// Создать генератор для операции, которая бы асинхронно возвращала значения

{
  async function* generateAsyncValues() {
    let count = 3;
    while (count) {
      await new Promise((resolve, reject) => {
        console.log("first");
        setTimeout(resolve, 1000);
      });

      yield count++;
    }
  }

  const iterator = generateAsyncValues();
  let value = iterator.next().then((res) => console.log(res.value));
}

let a = getRandomWebIntegers(1000);
console.log(a.next().then((res) => console.log(res.value)));
