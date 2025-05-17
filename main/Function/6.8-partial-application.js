// Уменьшение избыточности за счет частичного применения
// Задача
// Есть функция, принимающая несколько аргументов. Мы хотим обернуть ее
// в одну или несколько специализированных версий, которые требуют меньшего
// числа аргументов.

{
  function makeString(prefix, str, sufix) {
    return prefix + str + sufix;
  }
  function quoteString(str) {
    return makeString('"', str, '"');
  }
  console.log(quoteString("Artem"));
}
