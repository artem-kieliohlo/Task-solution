// Сравнение строк без учета регистра
// Задача
// Определить, являются ли строки одинаковыми, если считать, что прописные
// и строчные буквы — это одно и то же.
{
  let firstString = "Artem";
  let secondString = "arTeM";
  if (
    firstString.trim().toLocaleLowerCase("en-US") === // использован Локаль для лучшего сравнения
    secondString.trim().toLocaleLowerCase("en-US")
  ) {
    console.log("strings are equal");
  } else {
    console.log("strings are not equal");
  }
}
