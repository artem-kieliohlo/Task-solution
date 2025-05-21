// Перехват различных типов ошибок
// Задача
// Распознавать разные типы ошибок и обрабатывать их соответственно либо же
// перехватывать только ошибки определенных типов.

{
  try {
    //
  } catch (error) {
    if (error instanceof ReferenceError) {
      //
    } else if (error instanceof TypeError) {
      //
    } else if (error instanceof RangeError) {
      //
    } else {
      //
    }
  }
}
