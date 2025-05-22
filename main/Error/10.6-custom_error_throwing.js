// Выдача нестандартных ошибок
// Задача
// Указать на специфические условия ошибки, выбросив собственный объект
// ошибки.
{
  class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = "MyError";
    }
  }

  try {
    if (Math.random() * 10 < 9) {
      throw new MyError("Значение меньше 9");
    } else {
      console.log("Значение больше 9");
    }
  } catch (error) {
    console.log(error.name + ": " + error.message);
  }
}
