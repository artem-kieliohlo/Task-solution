// Перехват асинхронных ошибок
// Задача
// Перехватывать ошибки, возникающие при выполнении операции в фоновом
// потоке.

{
  async function name(params) {
    try {
      let value = await fetch("http://noserver");
    } catch (error) {
      console.log(error);
    }
  }

  fetch("http://noserver")
    .then((res) => console.log("We did it, fam."))
    .catch((err) => console.log(err));
}
