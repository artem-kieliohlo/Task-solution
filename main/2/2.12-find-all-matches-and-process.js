// Поиск по шаблону
// Задача
// Найти в строке все фрагменты, соответствующие заданному шаблону, и выпол-
// нить с каждым из них некую операцию.

{
  let sentence = "This is a list of items: cherries, limes, oranges, apples.";
  let pattern = /li/g;
  let result = sentence.matchAll(pattern);

  for (let match of result) {
    console.log(`at ${match.index} index  we found ${match[0]}`);
  }
}
