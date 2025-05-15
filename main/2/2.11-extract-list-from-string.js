// Извлечение списка в виде массива из строки
// Задача
// Есть строка, состоящая из нескольких предложений. В одном из них есть список
// элементов. Он начинается с двоеточия (:) и заканчивается точкой (.), а элементы
// разделены запятыми. Мы хотим извлечь из строки только этот список.
// Дано:
// This is a list of items: cherries, limes, oranges, apples.
// Нужно получить:
// ['cherries','limes','oranges','apples']

{
  let sentence = "This is a list of items: cherries, limes, oranges, apples.";
  let startIndex = sentence.indexOf(":");
  let endIndex = sentence.indexOf(".", startIndex);
  let listFragment = sentence.slice(startIndex + 1, endIndex);
  let items = listFragment.split(",").map((item) => item.trim());
  console.log(items);
}
