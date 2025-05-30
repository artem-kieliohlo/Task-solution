// Написание модульных тестов для кода
// Задача
// Написать автоматизированные тесты, которые бы гарантировали, что код соответствует критериям
// разработки сейчас и будет им соответствовать в дальнейшем

export function factorialize(number) {
  if (number < 0) {
    throw new RangeError("Factorials are only defined for positive numbers");
  } else if (number != Math.trunc(number)) {
    throw new RangeError("Factorials are only defined for integers");
  } else {
    if (number == 0 || number == 1) {
      return 1;
    } else {
      let result = number;
      while (number > 1) {
        number--;
        result *= number;
      }
      return result;
    }
  }
}
