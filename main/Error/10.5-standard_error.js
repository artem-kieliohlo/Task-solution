// Выдача обычной ошибки
// Задача
// Сообщить о состоянии ошибки, выбросив объект Error

{
  try {
    if (Math.random() * 10 < 5) {
      throw new Error("Значение меньше 5");
    } else {
      console.log("Значение больше 5");
    }
  } catch (error) {
    console.error(error.message);
  }
}
