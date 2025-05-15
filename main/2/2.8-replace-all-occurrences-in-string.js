// Замена всех вхождений строки
// Задача
// Найти в строке все вхождения заданной подстроки и заменить их на что-то
// другое.
{
  let originalText = " Hello  artem?  artem its me.";
  let searchPattern = /artem/g;
  let replacement = "Artem";
  let result = originalText.replace(searchPattern, replacement);
  console.log(result);
}
