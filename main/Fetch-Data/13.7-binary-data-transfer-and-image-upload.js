// Передача двоичных данных и загрузка изображения
// Задача
// Получить с сервера изображение в виде двоичных данных.

async function fetchImage() {
  const url = 'logo.png';
  const response = await fetch(url);
  console.log(response);
  const blob = await response.blob();
  console.log(blob);

  // add returned url to image element
  const img = document.getElementById('result');
  img.src = URL.createObjectURL(blob);
}

fetchImage();