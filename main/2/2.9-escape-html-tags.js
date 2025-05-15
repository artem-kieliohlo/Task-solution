// Замена тегов HTML на именованные сущности
// Задача
// Разместить на веб-странице фрагмент HTML-кода, для чего понадобится экра-
// нировать разметку (чтобы браузер вывел угловые скобки, а не пытался интер-
// претировать их как теги HTML). Это бывает нужно, например, чтобы вывести
// кусок HTML-кода в учебной статье. Или для надежной очистки внешних данных,
// таких как текст, переданный пользователем, который затем должен быть помещен
// в базу данных.

let originalText = "<h1> Hello world!</h1>";
let escapedHTML = originalText.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
let outputParagraph = document.createElement("p");
outputParagraph.innerHTML = escapedHTML;
// eslint-disable-next-line no-unused-vars
let appendedParagraph = document
  .querySelector("body")
  .appendChild(outputParagraph);

{
  let originalText = "<h1> Hello world!</h1>";
  let outputParagraph = document.createElement("p");
  outputParagraph.textContent = originalText;
  // eslint-disable-next-line no-unused-vars
  let appendedParagraph = document.body.appendChild(outputParagraph);
}
