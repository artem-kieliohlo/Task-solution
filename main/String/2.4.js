// Использование эмодзи
// Задача
// Вставить из расширенного набора Unicode символ с четырехзначным кодом, такой
// как эмодзи или некоторые буквы, не входящие в английский алфавит.

{
  let unicodeSymbol = "\u00A2"; // В интернете используется синтаксис U+00A2, но в коде нужно указывать в вормате \uXXXX
  console.log(unicodeSymbol);
}

//https://symbl.cc/ru/unicode-table/#latin-1-supplement - таблица unicode символов

{
  let unicodeSymbol = "\u{1f601}"; // для 5 значных сиволов необходимо обвертка в {}
  console.log(unicodeSymbol);
}
