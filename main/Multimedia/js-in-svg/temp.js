// Применить JavaScript к SVG-файлу или SVG-элементу.
// Решение
// Код JavaScript встраивается в SVG так же, как в обычный HTML, — в виде элементов script. Только, в отличие от HTML, в SVG код JavaScript должен располагаться внутри разметки CDATA (пример 15.1). Для работы с элементами SVG
// применяются те же методы DOM, что и для обычного HTML.

window.onload = function () {
  const square = document.getElementById('square');

  // onclick event handler, change circle radius
  square.onclick = function click() {
    const color = this.getAttribute('fill');
    if (color === '#ff0000') {
      this.setAttribute('fill', '#0000ff');
    } else {
      this.setAttribute('fill', '#ff0000');
    }
  };
};
