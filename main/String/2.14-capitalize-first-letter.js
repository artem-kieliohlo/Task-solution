// Замена первой буквы строки на прописную
// Задача
// Сделать первую букву строки прописной, не затрагивая всю остальную строку.
{
  let text = "hello world! ";
  console.log(
    text.trim().replace(text.charAt(0), text.charAt(0).toUpperCase())
  );
}

{
  let text = "hello world! ";
  let charsArray = text.trim().split("");
  charsArray[0] = charsArray[0].toUpperCase();
  let result = charsArray.join("");
  console.log(result);
}

{
  let text = "hello world! ";
  let capitalizedText = text.trim()[0].toUpperCase() + text.trim().slice(1, -1);
  console.log(capitalizedText);
}
